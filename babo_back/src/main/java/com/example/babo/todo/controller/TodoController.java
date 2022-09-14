package com.example.babo.todo.controller;

import com.example.babo.todo.domain.Todo;
import com.example.babo.todo.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

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
}
