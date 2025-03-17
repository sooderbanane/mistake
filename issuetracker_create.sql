
CREATE TABLE IF NOT EXISTS users (
    user_id BIGSERIAL PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    user_email VARCHAR(50) NOT NULL,
    user_password VARCHAR(50) NOT NULL
);

CREATE UNIQUE INDEX unique_user_name ON users (UPPER(user_name));
CREATE UNIQUE INDEX unique_user_email ON users (UPPER(user_email));

CREATE TABLE projects (
    project_id BIGSERIAL PRIMARY KEY,
    project_name VARCHAR(50) NOT NULL,
    project_finished bool default false,
    project_user_id BIGINT NOT NULL,
    FOREIGN KEY (project_user_id) REFERENCES users(user_id)
);

create table issues (
    issue_id BIGSERIAL PRIMARY KEY,
    issue_title VARCHAR(50) NOT NULL,
    issue_description VARCHAR(50) NOT NULL,
    issue_status VARCHAR(20) CHECK (issue_status IN ('open','in_progress','resolved', 'closed')) default 'open',
    issue_owner BIGINT,
    issue_project_id BIGINT NOT NULL,
    FOREIGN KEY (issue_owner) REFERENCES users(user_id),   
    FOREIGN KEY (issue_project_id) REFERENCES projects(project_id)
);

create table comments (
    comment_id BIGSERIAL PRIMARY KEY,
    comment_title VARCHAR(50) NOT NULL,
    comment_text VARCHAR(500) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    issue_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (issue_id) REFERENCES issues(issue_id)
);
