package dev.jake.oktabackend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class NotesController {

    @GetMapping("/notes")
    public List<Map<String, String>> getNotes() {
        return List.of(
                Map.of("id", "1", "title", "First note", "content", "This is a secure note."),
                Map.of("id", "2", "title", "Second note", "content", "Only logged-in users can see this.")
        );
    }
}