package com.example.babo.todo.service;

import com.example.babo.todo.dao.TodoRepository;
import com.example.babo.todo.domain.Todo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

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
}
