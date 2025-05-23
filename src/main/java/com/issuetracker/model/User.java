package com.issuetracker.model;

import jakarta.persistence.*;
import lombok.*;

@Entity  // Marks this class as a database entity and marks the class for scanning by the JPA provider
@Table(name = "users") // Maps to the "users" table in PostgreSQL
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false, unique = true)
    private String userName;

    @Column(nullable = false, unique = true)
    private String userEmail;

    @Column(nullable = false)
    private String userPassword;    
}
