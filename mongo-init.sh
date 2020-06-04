mongo -- "$MONGO_INITDB_DATABASE" <<EOF
  db.createUSER({
    user: "$MONGO_USERNAME",
    pwd: "$MONGO_PASSWORD",
    roles:[
      {role: 'readwrite', db:"$MONGO_INITDB_DATABASE"}
    ]

  })

  EOF