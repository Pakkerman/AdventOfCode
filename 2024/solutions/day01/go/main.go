package main

import (
	"math"
	"sort"
	"strconv"
	"strings"
)

func parseInput(input string) string {
	return strings.Trim(input, "\n")
}

func partOne(input string) int {
	parsed := parseInput(input)
	lines := strings.Split(parsed, "\n")
	left := []int{}
	right := []int{}
	for _, line := range lines {
		items := strings.Split(line, " ")
		leftInt, _ := strconv.Atoi(items[0])
		rightInt, _ := strconv.Atoi(items[len(items)-1])
		left = append(left, leftInt)
		right = append(right, rightInt)
	}

	sort.Ints(left)
	sort.Ints(right)

	sum := 0
	for idx := range left {
		delta := int(math.Abs(float64(left[idx]) - float64(right[idx])))
		sum += delta
	}

	return sum
}

func partTwo(input string) int {
	parsed := parseInput(input)
	lines := strings.Split(parsed, "\n")
	left := []int{}
	right := []int{}
	for _, line := range lines {
		items := strings.Split(line, " ")
		leftInt, _ := strconv.Atoi(items[0])
		rightInt, _ := strconv.Atoi(items[len(items)-1])
		left = append(left, leftInt)
		right = append(right, rightInt)
	}

	record := make(map[int]int)
	for _, item := range right {
		_, ok := record[item]
		if !ok {
			record[item] = 0
		}
		record[item]++

	}

	sum := 0
	for _, item := range left {
		multiplyer, ok := record[item]
		if !ok {
			multiplyer = 0
		}
		sum += multiplyer * item

	}

	return sum
}
