package com.dinist.jwttest.Controller;

import com.dinist.jwttest.DAO.DAOBoard;
import com.dinist.jwttest.DTO.DTOBoard;
import com.dinist.jwttest.JWT.JwtTokenUtil;
import com.dinist.jwttest.Model.ResBody;
import com.dinist.jwttest.Path.Board_path;
import com.dinist.jwttest.Repository.BoardRepository;
import com.dinist.jwttest.Service.BoardDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;

/*
    게시판 관련요청에 대한 처리
 */


@RestController
@CrossOrigin
public class BoardController {

    @Autowired
    BoardRepository boardRepository;

    @Autowired
    BoardDetailService boardDetailService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @GetMapping("/api/board/board_list")
    public ResponseEntity<?> paging(@PageableDefault(size = 10, sort = "seq") Pageable pageRequest, HttpServletRequest req){
        String token = req.getHeader("Authorization").substring(7);
        Page<DAOBoard> board_list = boardRepository.findAll(pageRequest);
        Board_path.valueOf("Board_list").getPath();
        Page<DTOBoard> out_list = board_list.map(
                p -> new DTOBoard(p.getSeq(),p.getTitle(),p.getReadcount(),p.getAuthor(),p.getContent())
        );

        return ResponseEntity.ok(new ResBody<>(out_list, jwtTokenUtil.extendToken(token)));

    }

    @GetMapping("/api/board/{seq}")
    public ResponseEntity<?> getboard(@PathVariable String seq,HttpServletRequest req){
        String token = req.getHeader("Authorization").substring(7);
        DAOBoard board = boardRepository.findBySeq(Long.parseLong(seq));
        board.setReadcount(board.getReadcount()+1);
        boardDetailService.update(board);
        return ResponseEntity.ok(new ResBody<>(board,jwtTokenUtil.extendToken(token)));
    }

    @PostMapping("/api/board/modify")
    public ResponseEntity<?> modifyBoard(@RequestBody DTOBoard board, HttpServletRequest req){
        String token = req.getHeader("Authorization").substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);
        DAOBoard daoBoard = boardRepository.findBySeq(board.getSeq());
        if(board.getTitle() != null && !board.getTitle().equals("")) daoBoard.setTitle(board.getTitle());
        if(board.getContent() != null && !board.getContent().equals("")) daoBoard.setContent(board.getContent());
        if(board.getAuthor() != null && username != null && board.getAuthor().equals(username)){
            return ResponseEntity.ok(new ResBody<>(boardDetailService.update(daoBoard), jwtTokenUtil.extendToken(token)));
        }
        else return ResponseEntity.badRequest().body("Invalid value..");
    }

    @PostMapping("/api/board/delete")
    public ResponseEntity<?> deleteBoard(@RequestBody DTOBoard board, HttpServletRequest req){
        String token = req.getHeader("Authorization").substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);
        if(username != null && board.getAuthor() != null && username.equals(board.getAuthor())){
            boardRepository.delete(boardRepository.findBySeq(board.getSeq()));
            return ResponseEntity.ok(new ResBody<>("Delete Success",jwtTokenUtil.extendToken(token)));
        }

        return ResponseEntity.badRequest().body("Invalid Value");
    }

    @PostMapping("/api/board/write")
    public ResponseEntity<?> addboard(@RequestBody DTOBoard board, HttpServletRequest req){
        String token = req.getHeader("Authorization").substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);
        board.setReadcount(0);
        board.setAuthor(username);
        return ResponseEntity.ok(new ResBody<>(boardDetailService.save(board),jwtTokenUtil.extendToken(token)));
    }

}
