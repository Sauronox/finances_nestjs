db.container.insert({});

db.createUser(
        {
            user: "financeuseradmin",
            pwd: "3EHKxSMJaTaiitiMcC84benBj75DndFkco5Yk",
            roles: [
                {
                    role: "readWrite",
                    db: "finance"
                }
            ]
        }
);