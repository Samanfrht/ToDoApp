package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/Samanfrht/golang-react-todo/middleware"
	"github.com/Samanfrht/golang-react-todo/router"
)

func main() {
	middleware.Init()
	// middleware.NsertOneTask("havij", 5)

	r := router.Router()
	fmt.Println("starting the server on port 9000...")

	log.Fatal(http.ListenAndServe(":9000", r))
}
