export type coffesType = {
    id: number
    name: string
    description: string
    tags: string[]
    price: string
    thumbnail: string
    quantity: number
}

export const Coffes = [
    {
      id: 1,
      name: "Expresso Tradicional",
      description: "O tradicional café com água quente e grãos moídos",
      tags:["Tradicional"],
      price: 9.90,
      thumbnail: "traditionalExpress.png",
      quantity: 0
        },
    {
        id: 2,
        name: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        tags:["Tradicional"],
        price: 11.90,
        thumbnail: "americanExpress.png",
        quantity: 0
        },
    {
        id: 3,
        name: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        tags:["Tradicional"],
        price: 10.50,
        thumbnail: "creamyExpress.png",
        quantity: 0
        },
    {
        id: 4,
        name: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        tags:["Tradicional", "Gelado"],
        price: 8.40,
        thumbnail: "icedExpress.png",
        quantity: 0
        },
    {
        id: 5,
        name: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        tags:["Tradicional", "Com leite"],
        price: 12.00,
        thumbnail: "coffeWithMilk.png",
        quantity: 0
        },
    {
        id: 6,
        name: "Latte",
        description: "Uma doswe de café expresso com o dobro de leite e espuma cremosa",
        tags:["Tradicional", "Com leite"],
        price: 12.50,
        thumbnail: "latte.png",
        quantity: 0
        },
    {
        id: 7,
        name: "Capuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        tags:["Tradicional", "Com leite"],
        price: 13.00,
        thumbnail: "capuccino.png",
        quantity: 0
        },
    {
        id: 8,
        name: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        tags:["Tradicional", "Com leite"],
        price: 13.00,
        thumbnail: "macchiato.png",
        quantity: 0
        },
    {
        id: 9,
        name: "Mocaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        tags:["Tradicional", "Com leite", "Chocolate"],
        price: 13.90,
        thumbnail: "mocaccino.png",
        quantity: 0
        },
    {
        id: 10,
        name: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        tags:["Especial", "Com leite", "Chocolate"],
        price: 14.90,
        thumbnail: "hotChocolate.png",
        quantity: 0
        },
    {
        id: 11,
        name: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        tags:["Especial", "Alcoólico", "Gelado"],
        price: 16.00,
        thumbnail: "cubano.png",
        quantity: 0
        },
    {
        id: 12,
        name: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        tags:["Especial"],
        price: 15.50,
        thumbnail: "havaiano.png",
        quantity: 0
        },
    {
        id: 13,
        name: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        tags:["Especial"],
        price: 20.30,
        thumbnail: "arabe.png",
        quantity: 0
        },
    {
        id: 14,
        name: "Irlandês",
        description: "Bebida a base de café, uisque irlandês, açucar e chantilly",
        tags:["Especial", "Alcoólico"],
        price: 21.00,
        thumbnail: "irlandes.png",
        quantity: 0
        }
]