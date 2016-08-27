package main

import (
	"fmt"
	"io/ioutil"
)

// Page sirve para la estructura de las páginas
type Page struct {
	Title string
	Body  []byte
}

func (p *Page) save() error {
	filename := "./data/" + p.Title + ".txt"
	err := ioutil.WriteFile(filename, p.Body, 0600)
	return err
}

func loadPage(title string) *Page {
	filename := "./data/" + title + ".txt"
	body, _ := ioutil.ReadFile(filename)
	page := &Page{Title: title, Body: body}
	return page
}

func main() {
	/*page := &Page{Title: "primer", Body: []byte("Nuestra primer página")}
	page.save()*/
	page := loadPage("primer")
	fmt.Println(page.Title, string(page.Body))
}
