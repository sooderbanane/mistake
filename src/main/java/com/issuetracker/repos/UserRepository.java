package com.issuetracker.repos;

import com.issuetracker.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUserId(Long userId);
    Optional<User> findByUserName(String userName);
    Optional<User> findByUserEmail(String userEmail);
}
