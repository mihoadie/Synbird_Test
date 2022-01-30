// A mock function to mimic making an async request for data
export function getRecipes() {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve(
          // {
          //   gateau: [
          //     { quantity: 50, unit: "g", ingredient: "farine" },
          //     { quantity: 100, unit: "g", ingredient: "beurre" },
          //     { quantity: 100, unit: "g", ingredient: "chocolat" },
          //     { quantity: 2, unit: "", ingredient: "oeuf" },
          //     { quantity: 75, unit: "g", ingredient: "sucre" },
          //   ],
          //   mousse: [
          //     { quantity: 40, unit: "g", ingredient: "farine" },
          //     { quantity: 80, unit: "g", ingredient: "beurre" },
          //     { quantity: 120, unit: "g", ingredient: "chocolat" },
          //     { quantity: 2, unit: "", ingredient: "oeuf" },
          //     { quantity: 80, unit: "g", ingredient: "sucre" },
          //   ],
          //   tarte: [
          //     { quantity: 4, unit: "", ingredient: "pomme" },
          //     { quantity: 100, unit: "g", ingredient: "beurre" },
          //     { quantity: 30, unit: "g", ingredient: "farine" },
          //     { quantity: 1, unit: "", ingredient: "oeuf" },
          //     { quantity: 40, unit: "g", ingredient: "sucre" },
          //   ],
          // }

          [
            [
              "gateaux", //
              { quantity: 50, unit: "g", ingredient: "farine" },
              { quantity: 100, unit: "g", ingredient: "beurre" },
              { quantity: 100, unit: "g", ingredient: "chocolat" },
              { quantity: 2, unit: "", ingredient: "oeuf" },
              { quantity: 75, unit: "g", ingredient: "sucre" },
            ],
            [
              "mousse", //
              { quantity: 40, unit: "g", ingredient: "farine" },
              { quantity: 80, unit: "g", ingredient: "beurre" },
              { quantity: 120, unit: "g", ingredient: "chocolat" },
              { quantity: 2, unit: "", ingredient: "oeuf" },
              { quantity: 80, unit: "g", ingredient: "sucre" },
            ],
            [
              "tarte", //
              { quantity: 4, unit: "", ingredient: "pomme" },
              { quantity: 100, unit: "g", ingredient: "beurre" },
              { quantity: 30, unit: "g", ingredient: "farine" },
              { quantity: 1, unit: "", ingredient: "oeuf" },
              { quantity: 40, unit: "g", ingredient: "sucre" },
            ],
          ]
        ),
      500
    )
  );
}
