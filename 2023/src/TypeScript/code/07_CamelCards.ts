// Day 07 CamelCards

export function CamelCardsPartOne(input: string): number {
  const labels = "23456789TJQKA";
  const hands = input
    .trim()
    .split("\n")
    .map((item) => item.split(" "));

  for (let i = 0; i < hands.length; i++) {
    const curr = hands[i];
    const hand = hands[i][0];

    const rating = evalHand(hand);
    curr.push(rating);
  }

  hands.sort(compareFn);
  hands.sort((a, b) => parseInt(a[2]) - parseInt(b[2]));

  let rank = 1;
  let total = 0;

  for (let i = hands.length - 1; i >= 0; i--) {
    total += +hands[i][1] * rank;
    rank++;
  }

  return total;

  function compareFn(a: string[], b: string[]): number {
    const handA = a[0];
    const handB = b[0];
    for (let i = 0; i < handA.length; i++) {
      const valueA = labels.lastIndexOf(handA[i]);
      const valueB = labels.indexOf(handB[i]);
      if (valueA === valueB) {
        continue;
      } else if (valueA < valueB) {
        return 1;
      } else if (valueA > valueB) {
        return -1;
      }
    }
  }

  function evalHand(input: string): string {
    const cards = new Map<string, number>();

    for (let i = 0; i < input.length; i++) {
      const curr = input[i];
      if (!cards.has(curr)) {
        cards.set(curr, 0);
      }

      cards.set(curr, cards.get(curr) + 1);
    }

    const cardsCount = [...cards.values()].sort((a, b) => b - a).join("");

    if (cardsCount === "5") {
      // five of a kind
      return "1";
    } else if (cardsCount === "41") {
      // four of a kind
      return "2";
    } else if (cardsCount === "32") {
      // full house
      return "3";
    } else if (cardsCount === "311") {
      // three of a kind
      return "4";
    } else if (cardsCount === "221") {
      // two pairs
      return "5";
    } else if (cardsCount === "2111") {
      // one pair
      return "6";
    } else if (cardsCount === "11111") {
      // high cards
      return "7";
    }
  }
}

export function CamelCardsPartTwo(input: string) {
  const labels = "J23456789TQKA";
  const hands = input
    .trim()
    .split("\n")
    .map((item) => item.split(" "));

  for (let i = 0; i < hands.length; i++) {
    const curr = hands[i];
    const hand = hands[i][0];

    const rating = evalHand(hand);
    curr.push(rating);
  }

  hands.sort(compareFn);
  hands.sort((a, b) => parseInt(a[2]) - parseInt(b[2]));

  let rank = 1;
  let total = 0;

  for (let i = hands.length - 1; i >= 0; i--) {
    total += +hands[i][1] * rank;
    rank++;
  }

  return total;

  function compareFn(a: string[], b: string[]): number {
    const handA = a[0];
    const handB = b[0];
    for (let i = 0; i < handA.length; i++) {
      const valueA = labels.lastIndexOf(handA[i]);
      const valueB = labels.indexOf(handB[i]);
      if (valueA === valueB) {
        continue;
      } else if (valueA < valueB) {
        return 1;
      } else if (valueA > valueB) {
        return -1;
      }
    }
  }

  function evalHand(input: string): string {
    const cards = new Map<string, number>();

    for (let i = 0; i < input.length; i++) {
      const curr = input[i];
      if (!cards.has(curr)) {
        cards.set(curr, 0);
      }

      cards.set(curr, cards.get(curr) + 1);
    }

    const numberOfJs = cards.get("J");
    cards.delete("J");
    let cardsCount = [...cards.values()].sort((a, b) => b - a);
    if (numberOfJs) cardsCount[0] += numberOfJs;

    const cardString = cardsCount.join("");

    if (cardString === "5") {
      // five of a kind
      return "1";
    } else if (cardString === "41") {
      // four of a kind
      return "2";
    } else if (cardString === "32") {
      // full house
      return "3";
    } else if (cardString === "311") {
      // three of a kind
      return "4";
    } else if (cardString === "221") {
      // two pairs
      return "5";
    } else if (cardString === "2111") {
      // one pair
      return "6";
    } else if (cardString === "11111") {
      // high cards
      return "7";
    }
    // If JJJJJ are the cards, then cardString will be '' but 5 Js is five of a kind
    return "1";
  }
}
