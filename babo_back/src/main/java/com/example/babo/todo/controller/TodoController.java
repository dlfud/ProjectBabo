package com.example.babo.todo.controller;

import com.example.babo.todo.domain.Todo;
import com.example.babo.todo.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/todo")
public class TodoController {
    private final TodoService todoService;

    @GetMapping("/list")
    public List<Todo> getList(){
        return this.todoService.getList();
    }

    @PostMapping("/create")
    public List<Todo> create(@RequestBody Todo todo){
        System.out.println("여기 왔음");
        this.todoService.create(todo);
        return this.todoService.getList();
    }

    @DeleteMapping("/delete/{id}")
    public List<Todo> delete(@PathVariable("id") Long id, HttpServletResponse httpServletResponse) throws IOException {
        this.todoService.delete(id, httpServletResponse);
        return todoService.getList();
    }
}
