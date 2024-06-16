package model

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Bin struct {
	ID           primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
	Location     string             `bson:"location" json:"location"`
	Time         time.Time          `bson:"time" json:"time"`
	BottleCount  int                `bson:"bottle_count" json:"bottle_count"`
	PlasticCount int                `bson:"plastic_count" json:"plastic_count"`
	CanCount     int                `bson:"can_count" json:"can_count"`
	PaperCount   int                `bson:"paper_count" json:"paper_count"`
}

var BinMigrationData = []Bin{
	{
		Location:     "Patna",
		Time:         time.Now(),
		BottleCount:  2,
		PlasticCount: 1,
		CanCount:     1,
		PaperCount:   1,
	},
	
}
