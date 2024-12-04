package main

import (
	"log"
	"os"
	"testing"
)

func getExample() string {
	data, err := os.ReadFile("../example.txt")
	if err != nil {
		log.Fatalf("Failed to read file %v", err)
	}

	return string(data)
}

func getInput() string {
	data, err := os.ReadFile("../input.txt")
	if err != nil {
		log.Fatalf("Failed to read file %v", err)
	}

	return string(data)
}

func TestPartOne(t *testing.T) {
	example := getExample()
	input := getInput()
	t.Run("example", func(t *testing.T) {
		actual := partOne(example)
		expected := 11
		if actual != expected {
			t.Errorf("\nactual: %v\nexpected: %v", actual, expected)
		}
	})

	t.Run("input", func(t *testing.T) {
		actual := partOne(input)
		expected := 2285373
		if actual != expected {
			t.Errorf("\nactual: %v\nexpected: %v", actual, expected)
		}
	})
}

func TestPartTwo(t *testing.T) {
	example := getExample()
	input := getInput()
	t.Run("example", func(t *testing.T) {
		actual := partTwo(example)
		expected := 31
		if actual != expected {
			t.Errorf("\nactual: %v\nexpected: %v", actual, expected)
		}
	})

	t.Run("input", func(t *testing.T) {
		actual := partTwo(input)
		expected := 21142653
		if actual != expected {
			t.Errorf("\nactual: %v\nexpected: %v", actual, expected)
		}
	})
}
