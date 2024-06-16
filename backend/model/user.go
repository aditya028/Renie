package model

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	ID       primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
	Username string             `bson:"username" json:"username"`
	Password string             `bson:"password" json:"password"`
	Email    string             `bson:"email" json:"email"`
}

var UserMigrationData = []User{
	{
		Username: "user_1",
		Password: "password1",
		Email:    "admin1@example.com",
	},
	{
		Username: "user_2",
		Password: "password2",
		Email:    "admin2@example.com",
	},
	{
		Username: "user_3",
		Password: "password3",
		Email:    "admin3@example.com",
	},
	
}