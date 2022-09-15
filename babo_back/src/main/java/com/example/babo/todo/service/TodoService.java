package com.example.babo.todo.service;

import com.example.babo.dto.ResponseDTO;
import com.example.babo.todo.dao.TodoRepository;
import com.example.babo.todo.domain.Todo;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TodoService {
    private final TodoRepository todoRepository;

    public List<Todo> getList(){
        return todoRepository.findAll();
    }

    public Todo create(Todo todo) {
        Todo newTodo = new Todo();
        newTodo.setContent(todo.getContent());
        newTodo.setCreateDate(LocalDateTime.now());
        this.todoRepository.save(newTodo);
        return newTodo;
    }

    public void delete(Long id, HttpServletResponse response) throws IOException {
        Optional<Todo> todo = todoRepository.findById(id);
        if(todo.isPresent()){
            todoRepository.deleteById(id);
        }else{
            ResponseDTO responseDTO = new ResponseDTO();
            responseDTO.setCode("F-1");
            responseDTO.setMessage("이미 삭제된 할 일입니다.");
            response.setStatus(404);
            response.setHeader("content-type", "application/json;charset=utf-8");
            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.writeValue(response.getOutputStream(), responseDTO);
        }
    }
}
