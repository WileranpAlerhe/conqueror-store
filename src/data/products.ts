// Catálogo Parfum Brasil — dados migrados do storefront original.
export type Review = {
  name: string;
  city: string;
  rating: number;
  date: string;
  title: string;
  text: string;
  verified: boolean;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: "importado" | "premium" | "promocao";
  gender: "masculino" | "feminino" | "unissex";
  btu: number;
  price: number;
  oldPrice: number;
  installments: number;
  installmentValue: number;
  image: string;
  gallery: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  sizePrices: Record<string, { price: number; oldPrice: number }>;
  description: string;
  rating: number;
  reviews: number;
  reviewsList: Review[];
};

export const products: Product[] = [
 {
  "id": "1",
  "slug": "212-vip-men-black-masculino-eau-de-parfum",
  "name": "212 Vip Men Black Masculino Eau de Parfum",
  "category": "importado",
  "btu": 100,
  "price": 430,
  "oldPrice": 550,
  "installments": 10,
  "installmentValue": 42.9,
  "image": "/assets/p1-CADz3Sk0.webp",
  "gallery": [
   "/assets/p1-CADz3Sk0.webp",
   "/assets/p1-CADz3Sk0.webp",
   "/assets/p1-CADz3Sk0.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "50ml",
   "100ml"
  ],
  "sizePrices": {
   "50ml": {
    "price": 340,
    "oldPrice": 440
   },
   "100ml": {
    "price": 430,
    "oldPrice": 550
   }
  },
  "description": "Perfume masculino Importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 83,
  "reviewsList": [
   {
    "name": "Gustavo T.",
    "city": "São Paulo, SP",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Fixação absurda",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O 212 Vip Men Black é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Henrique F.",
    "city": "Fortaleza, CE",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Surpreendeu demais",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O 212 Vip Men Black é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Fábio S.",
    "city": "Natal, RN",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Sensacional!",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O 212 Vip Men Black é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Felipe B.",
    "city": "Curitiba, PR",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Cheiro incrível",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O 212 Vip Men Black é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "André R.",
    "city": "Florianópolis, SC",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Melhor compra do mês",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O 212 Vip Men Black é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Daniel O.",
    "city": "Maceió, AL",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Atendeu as expectativas",
    "text": "Comprei o 212 Vip Men Black e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   },
   {
    "name": "Alex M.",
    "city": "Recife, PE",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Atendeu as expectativas",
    "text": "Bom perfume, 212 Vip Men Black tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "2",
  "slug": "1-million-masculino-parfum",
  "name": "One Million Masculino Parfum",
  "category": "importado",
  "btu": 100,
  "price": 500,
  "oldPrice": 640,
  "installments": 10,
  "installmentValue": 49.9,
  "image": "/assets/p2-DMCMXe82.webp",
  "gallery": [
   "/assets/p2-DMCMXe82.webp",
   "/assets/p2-DMCMXe82.webp",
   "/assets/p2-DMCMXe82.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "50ml",
   "100ml",
   "200ml"
  ],
  "sizePrices": {
   "50ml": {
    "price": 390,
    "oldPrice": 500
   },
   "100ml": {
    "price": 500,
    "oldPrice": 640
   },
   "200ml": {
    "price": 700,
    "oldPrice": 900
   }
  },
  "description": "Perfume masculino Importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 86,
  "reviewsList": [
   {
    "name": "Leandro A.",
    "city": "Vitória, ES",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Vale cada centavo",
    "text": "Comprei o One Million e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Renato G.",
    "city": "Belo Horizonte, MG",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Original e maravilhoso",
    "text": "Comprei o One Million e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Rafael T.",
    "city": "Goiânia, GO",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Já é meu favorito",
    "text": "Comprei o One Million e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Marcelo F.",
    "city": "Cuiabá, MT",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Chegou perfeito",
    "text": "Comprei o One Million e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Caio S.",
    "city": "Salvador, BA",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Apaixonado pela fragrância",
    "text": "Comprei o One Million e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Igor B.",
    "city": "Manaus, AM",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Aprovado",
    "text": "Bom perfume, One Million tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   },
   {
    "name": "Diego R.",
    "city": "Rio de Janeiro, RJ",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Aprovado",
    "text": "One Million chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "3",
  "slug": "212-masculino-eau-de-toilette",
  "name": "212 Masculino Eau de Toilette",
  "category": "importado",
  "btu": 100,
  "price": 340,
  "oldPrice": 440,
  "installments": 10,
  "installmentValue": 33.9,
  "image": "/assets/p3-CQqyWvc_.webp",
  "gallery": [
   "/assets/p3-CQqyWvc_.webp",
   "/assets/p3-CQqyWvc_.webp",
   "/assets/p3-CQqyWvc_.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "50ml",
   "100ml",
   "200ml"
  ],
  "sizePrices": {
   "50ml": {
    "price": 280,
    "oldPrice": 360
   },
   "100ml": {
    "price": 340,
    "oldPrice": 440
   },
   "200ml": {
    "price": 470,
    "oldPrice": 600
   }
  },
  "description": "Perfume masculino Importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 89,
  "reviewsList": [
   {
    "name": "Júlio C.",
    "city": "Brasília, DF",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Surpreendeu demais",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O 212 virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Lucas N.",
    "city": "João Pessoa, PB",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Sensacional!",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O 212 virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Rodrigo A.",
    "city": "Porto Alegre, RS",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Cheiro incrível",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O 212 virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Eduardo G.",
    "city": "Campinas, SP",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Melhor compra do mês",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O 212 virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Ricardo T.",
    "city": "São Paulo, SP",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Fragrância impecável",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O 212 virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Bruno F.",
    "city": "Fortaleza, CE",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Recomendo",
    "text": "212 chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   },
   {
    "name": "Pedro S.",
    "city": "Natal, RN",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Recomendo",
    "text": "Comprei o 212 e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "4",
  "slug": "acqua-di-gio-masculino-eau-de-toilette",
  "name": "Acqua Di Gio Masculino Eau de Toilette",
  "category": "premium",
  "btu": 100,
  "price": 460,
  "oldPrice": 590,
  "installments": 10,
  "installmentValue": 45.9,
  "image": "/assets/p4-jFC7EVoC.webp",
  "gallery": [
   "/assets/p4-jFC7EVoC.webp",
   "/assets/p4-jFC7EVoC.webp",
   "/assets/p4-jFC7EVoC.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "50ml",
   "100ml",
   "200ml"
  ],
  "sizePrices": {
   "50ml": {
    "price": 370,
    "oldPrice": 470
   },
   "100ml": {
    "price": 460,
    "oldPrice": 590
   },
   "200ml": {
    "price": 620,
    "oldPrice": 790
   }
  },
  "description": "Perfume masculino Importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.9,
  "reviews": 92,
  "bestseller": true,
  "reviewsList": [
   {
    "name": "Davi P.",
    "city": "Curitiba, PR",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Original e maravilhoso",
    "text": "Para quem ama Acqua Di Gio, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Gustavo D.",
    "city": "Florianópolis, SC",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Já é meu favorito",
    "text": "Para quem ama Acqua Di Gio, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Henrique C.",
    "city": "Maceió, AL",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Chegou perfeito",
    "text": "Para quem ama Acqua Di Gio, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Fábio N.",
    "city": "Recife, PE",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Apaixonado pela fragrância",
    "text": "Para quem ama Acqua Di Gio, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Felipe A.",
    "city": "Vitória, ES",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Fixação absurda",
    "text": "Para quem ama Acqua Di Gio, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "André G.",
    "city": "Belo Horizonte, MG",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Cheiro gostoso",
    "text": "Comprei o Acqua Di Gio e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   },
   {
    "name": "Daniel T.",
    "city": "Goiânia, GO",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Cheiro gostoso",
    "text": "Bom perfume, Acqua Di Gio tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "5",
  "slug": "1-million-masculino-eau-de-toilette",
  "name": "One Million Masculino Eau de Toilette",
  "category": "premium",
  "btu": 100,
  "price": 480,
  "oldPrice": 610,
  "installments": 10,
  "installmentValue": 47.9,
  "image": "/assets/p5-CY3k58LG.webp",
  "gallery": [
   "/assets/p5-CY3k58LG.webp",
   "/assets/p5-CY3k58LG.webp",
   "/assets/p5-CY3k58LG.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "50ml",
   "100ml",
   "200ml"
  ],
  "sizePrices": {
   "50ml": {
    "price": 380,
    "oldPrice": 490
   },
   "100ml": {
    "price": 480,
    "oldPrice": 610
   },
   "200ml": {
    "price": 650,
    "oldPrice": 830
   }
  },
  "description": "Perfume masculino Importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.9,
  "reviews": 95,
  "bestseller": true,
  "reviewsList": [
   {
    "name": "Thiago L.",
    "city": "Cuiabá, MT",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Sensacional!",
    "text": "Já conhecia o One Million e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Leandro V.",
    "city": "Salvador, BA",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Cheiro incrível",
    "text": "Já conhecia o One Million e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Renato P.",
    "city": "Manaus, AM",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Melhor compra do mês",
    "text": "Já conhecia o One Million e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Rafael D.",
    "city": "Rio de Janeiro, RJ",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Fragrância impecável",
    "text": "Já conhecia o One Million e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Marcelo C.",
    "city": "Brasília, DF",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Vale cada centavo",
    "text": "Já conhecia o One Million e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Caio N.",
    "city": "João Pessoa, PB",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Gostei bastante",
    "text": "Bom perfume, One Million tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   },
   {
    "name": "Igor A.",
    "city": "Porto Alegre, RS",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Gostei bastante",
    "text": "One Million chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "6",
  "slug": "invictus-masculino-eau-de-toilette",
  "name": "Invictus Masculino Eau de Toilette",
  "category": "importado",
  "btu": 100,
  "price": 400,
  "oldPrice": 510,
  "installments": 10,
  "installmentValue": 39.9,
  "image": "/assets/p6-D6ylzfgA.webp",
  "gallery": [
   "/assets/p6-D6ylzfgA.webp",
   "/assets/p6-D6ylzfgA.webp",
   "/assets/p6-D6ylzfgA.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "50ml",
   "100ml",
   "200ml"
  ],
  "sizePrices": {
   "50ml": {
    "price": 320,
    "oldPrice": 410
   },
   "100ml": {
    "price": 400,
    "oldPrice": 510
   },
   "200ml": {
    "price": 550,
    "oldPrice": 700
   }
  },
  "description": "Perfume masculino Importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 98,
  "reviewsList": [
   {
    "name": "Vinícius O.",
    "city": "Campinas, SP",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Já é meu favorito",
    "text": "Invictus é amor à primeira borrifada. Sofisticado e duradouro. Vale muito a pena.",
    "verified": true
   },
   {
    "name": "Júlio M.",
    "city": "São Paulo, SP",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Chegou perfeito",
    "text": "Invictus é amor à primeira borrifada. Sofisticado e duradouro. Vale muito a pena.",
    "verified": true
   },
   {
    "name": "Lucas L.",
    "city": "Fortaleza, CE",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Apaixonado pela fragrância",
    "text": "Invictus é amor à primeira borrifada. Sofisticado e duradouro. Vale muito a pena.",
    "verified": true
   },
   {
    "name": "Rodrigo V.",
    "city": "Natal, RN",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Fixação absurda",
    "text": "Invictus é amor à primeira borrifada. Sofisticado e duradouro. Vale muito a pena.",
    "verified": true
   },
   {
    "name": "Eduardo P.",
    "city": "Curitiba, PR",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Surpreendeu demais",
    "text": "Invictus é amor à primeira borrifada. Sofisticado e duradouro. Vale muito a pena.",
    "verified": true
   },
   {
    "name": "Ricardo D.",
    "city": "Florianópolis, SC",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Bom custo-benefício",
    "text": "Invictus chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   },
   {
    "name": "Bruno C.",
    "city": "Maceió, AL",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Bom custo-benefício",
    "text": "Comprei o Invictus e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "7",
  "slug": "yves-saint-laurent-refillable-myslf-masculino-eau-de-parfum",
  "name": "Yves Saint Laurent Refillable MYSLF Masculino Eau de Parfum",
  "category": "premium",
  "btu": 100,
  "price": 620,
  "oldPrice": 790,
  "installments": 10,
  "installmentValue": 61.9,
  "image": "/assets/p7-TpShvQZj.webp",
  "gallery": [
   "/assets/p7-TpShvQZj.webp",
   "/assets/p7-TpShvQZj.webp",
   "/assets/p7-TpShvQZj.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "60ml",
   "100ml"
  ],
  "sizePrices": {
   "60ml": {
    "price": 480,
    "oldPrice": 610
   },
   "100ml": {
    "price": 620,
    "oldPrice": 790
   }
  },
  "description": "Perfume masculino Yves Saint Laurent — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.9,
  "reviews": 101,
  "bestseller": true,
  "reviewsList": [
   {
    "name": "Mateus B.",
    "city": "Recife, PE",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Cheiro incrível",
    "text": "O Yves Saint Laurent Refillable MYSLF é simplesmente sensacional. Recebo elogios toda vez que uso. Entrega super rápida pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Davi R.",
    "city": "Vitória, ES",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Melhor compra do mês",
    "text": "O Yves Saint Laurent Refillable MYSLF é simplesmente sensacional. Recebo elogios toda vez que uso. Entrega super rápida pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Gustavo O.",
    "city": "Belo Horizonte, MG",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Fragrância impecável",
    "text": "O Yves Saint Laurent Refillable MYSLF é simplesmente sensacional. Recebo elogios toda vez que uso. Entrega super rápida pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Henrique M.",
    "city": "Goiânia, GO",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Vale cada centavo",
    "text": "O Yves Saint Laurent Refillable MYSLF é simplesmente sensacional. Recebo elogios toda vez que uso. Entrega super rápida pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Fábio L.",
    "city": "Cuiabá, MT",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Original e maravilhoso",
    "text": "O Yves Saint Laurent Refillable MYSLF é simplesmente sensacional. Recebo elogios toda vez que uso. Entrega super rápida pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Felipe V.",
    "city": "Salvador, BA",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Muito bom",
    "text": "Comprei o Yves Saint Laurent Refillable MYSLF e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   },
   {
    "name": "André P.",
    "city": "Manaus, AM",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Muito bom",
    "text": "Bom perfume, Yves Saint Laurent Refillable MYSLF tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "8",
  "slug": "phantom-paco-rabanne-perfume-masculino-eau-de-toilette",
  "name": "Phantom Paco Rabanne Perfume Masculino Eau de Toilette",
  "category": "premium",
  "btu": 100,
  "price": 390,
  "oldPrice": 500,
  "installments": 10,
  "installmentValue": 38.9,
  "image": "/assets/p8-oL0icZxG.webp",
  "gallery": [
   "/assets/p8-oL0icZxG.webp",
   "/assets/p8-oL0icZxG.webp",
   "/assets/p8-oL0icZxG.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "50ml",
   "100ml",
   "150ml"
  ],
  "sizePrices": {
   "50ml": {
    "price": 320,
    "oldPrice": 410
   },
   "100ml": {
    "price": 390,
    "oldPrice": 500
   },
   "150ml": {
    "price": 500,
    "oldPrice": 640
   }
  },
  "description": "Perfume masculino Paco Rabanne — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.9,
  "reviews": 104,
  "bestseller": true,
  "reviewsList": [
   {
    "name": "Alex F.",
    "city": "Rio de Janeiro, RJ",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Chegou perfeito",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O Phantom Paco Rabanne é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Thiago S.",
    "city": "Brasília, DF",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Apaixonado pela fragrância",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O Phantom Paco Rabanne é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Leandro B.",
    "city": "João Pessoa, PB",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Fixação absurda",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O Phantom Paco Rabanne é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Renato R.",
    "city": "Porto Alegre, RS",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Surpreendeu demais",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O Phantom Paco Rabanne é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Rafael O.",
    "city": "Campinas, SP",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Sensacional!",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O Phantom Paco Rabanne é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Marcelo M.",
    "city": "São Paulo, SP",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Atendeu as expectativas",
    "text": "Bom perfume, Phantom Paco Rabanne tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   },
   {
    "name": "Caio L.",
    "city": "Fortaleza, CE",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Atendeu as expectativas",
    "text": "Phantom Paco Rabanne chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "9",
  "slug": "joop-homme-masculino-eau-de-toilette",
  "name": "Joop! Homme Masculino Eau de Toilette",
  "category": "promocao",
  "btu": 100,
  "price": 590,
  "oldPrice": 760,
  "installments": 10,
  "installmentValue": 58.9,
  "image": "/assets/p9-ccW-4WnK.webp",
  "gallery": [
   "/assets/p9-ccW-4WnK.webp",
   "/assets/p9-ccW-4WnK.webp",
   "/assets/p9-ccW-4WnK.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "75ml",
   "125ml",
   "200ml"
  ],
  "sizePrices": {
   "75ml": {
    "price": 340,
    "oldPrice": 440
   },
   "125ml": {
    "price": 450,
    "oldPrice": 580
   },
   "200ml": {
    "price": 590,
    "oldPrice": 760
   }
  },
  "description": "Perfume masculino Joop — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 107,
  "reviewsList": [
   {
    "name": "Diego G.",
    "city": "Natal, RN",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Melhor compra do mês",
    "text": "Comprei o Joop! Homme e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Vinícius T.",
    "city": "Curitiba, PR",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Fragrância impecável",
    "text": "Comprei o Joop! Homme e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Júlio F.",
    "city": "Florianópolis, SC",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Vale cada centavo",
    "text": "Comprei o Joop! Homme e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Lucas S.",
    "city": "Maceió, AL",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Original e maravilhoso",
    "text": "Comprei o Joop! Homme e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Rodrigo B.",
    "city": "Recife, PE",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Já é meu favorito",
    "text": "Comprei o Joop! Homme e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Eduardo R.",
    "city": "Vitória, ES",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Aprovado",
    "text": "Joop! Homme chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   },
   {
    "name": "Ricardo O.",
    "city": "Belo Horizonte, MG",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Aprovado",
    "text": "Comprei o Joop! Homme e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "10",
  "slug": "212-vip-men-masculino-eau-de-toilette",
  "name": "212 Vip Men Masculino Eau de Toilette",
  "category": "premium",
  "btu": 100,
  "price": 370,
  "oldPrice": 470,
  "installments": 10,
  "installmentValue": 36.9,
  "image": "/assets/p10-BGWB4CW5.webp",
  "gallery": [
   "/assets/p10-BGWB4CW5.webp",
   "/assets/p10-BGWB4CW5.webp",
   "/assets/p10-BGWB4CW5.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "50ml",
   "100ml",
   "200ml"
  ],
  "sizePrices": {
   "50ml": {
    "price": 300,
    "oldPrice": 380
   },
   "100ml": {
    "price": 370,
    "oldPrice": 470
   },
   "200ml": {
    "price": 500,
    "oldPrice": 640
   }
  },
  "description": "Perfume masculino Importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.9,
  "reviews": 110,
  "bestseller": true,
  "reviewsList": [
   {
    "name": "Pedro N.",
    "city": "Goiânia, GO",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Apaixonado pela fragrância",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O 212 Vip Men virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Mateus A.",
    "city": "Cuiabá, MT",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Fixação absurda",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O 212 Vip Men virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Davi G.",
    "city": "Salvador, BA",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Surpreendeu demais",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O 212 Vip Men virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Gustavo T.",
    "city": "Manaus, AM",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Sensacional!",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O 212 Vip Men virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Henrique F.",
    "city": "Rio de Janeiro, RJ",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Cheiro incrível",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O 212 Vip Men virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Fábio S.",
    "city": "Brasília, DF",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Recomendo",
    "text": "Comprei o 212 Vip Men e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   },
   {
    "name": "Felipe B.",
    "city": "João Pessoa, PB",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Recomendo",
    "text": "Bom perfume, 212 Vip Men tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "11",
  "slug": "silver-scent-masculino-eau-de-toilette",
  "name": "Silver Scent Masculino Eau de Toilette",
  "category": "promocao",
  "btu": 100,
  "price": 200,
  "oldPrice": 260,
  "installments": 10,
  "installmentValue": 19.9,
  "image": "/assets/p11-H_wyiCtn.webp",
  "gallery": [
   "/assets/p11-H_wyiCtn.webp",
   "/assets/p11-H_wyiCtn.webp",
   "/assets/p11-H_wyiCtn.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "100ml"
  ],
  "sizePrices": {
   "100ml": {
    "price": 200,
    "oldPrice": 260
   }
  },
  "description": "Perfume masculino Importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 113,
  "reviewsList": [
   {
    "name": "Daniel D.",
    "city": "Porto Alegre, RS",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Fragrância impecável",
    "text": "Para quem ama Silver Scent, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Alex C.",
    "city": "Campinas, SP",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Vale cada centavo",
    "text": "Para quem ama Silver Scent, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Thiago N.",
    "city": "São Paulo, SP",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Original e maravilhoso",
    "text": "Para quem ama Silver Scent, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Leandro A.",
    "city": "Fortaleza, CE",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Já é meu favorito",
    "text": "Para quem ama Silver Scent, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Renato G.",
    "city": "Natal, RN",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Chegou perfeito",
    "text": "Para quem ama Silver Scent, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Rafael T.",
    "city": "Curitiba, PR",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Cheiro gostoso",
    "text": "Bom perfume, Silver Scent tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   },
   {
    "name": "Marcelo F.",
    "city": "Florianópolis, SC",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Cheiro gostoso",
    "text": "Silver Scent chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "12",
  "slug": "versace-eros-masculino-eau-de-toilette",
  "name": "Versace Eros Masculino Eau de Toilette",
  "category": "importado",
  "btu": 100,
  "price": 420,
  "oldPrice": 540,
  "installments": 10,
  "installmentValue": 41.9,
  "image": "/assets/p12-Cpf8EzMl.webp",
  "gallery": [
   "/assets/p12-Cpf8EzMl.webp",
   "/assets/p12-Cpf8EzMl.webp",
   "/assets/p12-Cpf8EzMl.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "50ml",
   "100ml",
   "200ml"
  ],
  "sizePrices": {
   "50ml": {
    "price": 340,
    "oldPrice": 440
   },
   "100ml": {
    "price": 420,
    "oldPrice": 540
   },
   "200ml": {
    "price": 590,
    "oldPrice": 760
   }
  },
  "description": "Perfume masculino Versace — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 116,
  "reviewsList": [
   {
    "name": "Igor V.",
    "city": "Maceió, AL",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Fixação absurda",
    "text": "Já conhecia o Versace Eros e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Diego P.",
    "city": "Recife, PE",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Surpreendeu demais",
    "text": "Já conhecia o Versace Eros e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Vinícius D.",
    "city": "Vitória, ES",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Sensacional!",
    "text": "Já conhecia o Versace Eros e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Júlio C.",
    "city": "Belo Horizonte, MG",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Cheiro incrível",
    "text": "Já conhecia o Versace Eros e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Lucas N.",
    "city": "Goiânia, GO",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Melhor compra do mês",
    "text": "Já conhecia o Versace Eros e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Rodrigo A.",
    "city": "Cuiabá, MT",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Gostei bastante",
    "text": "Versace Eros chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   },
   {
    "name": "Eduardo G.",
    "city": "Salvador, BA",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Gostei bastante",
    "text": "Comprei o Versace Eros e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "13",
  "slug": "invictus-victory-elixir-perfume-masculino-eau-de-parfum",
  "name": "Invictus Victory Elixir Perfume Masculino Eau de Parfum",
  "category": "premium",
  "btu": 100,
  "price": 490,
  "oldPrice": 630,
  "installments": 10,
  "installmentValue": 48.9,
  "image": "/assets/p13-C01U4tg7.webp",
  "gallery": [
   "/assets/p13-C01U4tg7.webp",
   "/assets/p13-C01U4tg7.webp",
   "/assets/p13-C01U4tg7.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "50ml",
   "100ml"
  ],
  "sizePrices": {
   "50ml": {
    "price": 400,
    "oldPrice": 510
   },
   "100ml": {
    "price": 490,
    "oldPrice": 630
   }
  },
  "description": "Perfume masculino Importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.9,
  "reviews": 119,
  "bestseller": true,
  "reviewsList": [
   {
    "name": "Bruno M.",
    "city": "Manaus, AM",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Vale cada centavo",
    "text": "Invictus Victory Elixir é amor à primeira borrifada. Sofisticado e duradouro. Vale muito a pena.",
    "verified": true
   },
   {
    "name": "Pedro L.",
    "city": "Rio de Janeiro, RJ",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Original e maravilhoso",
    "text": "Invictus Victory Elixir é amor à primeira borrifada. Sofisticado e duradouro. Vale muito a pena.",
    "verified": true
   },
   {
    "name": "Mateus V.",
    "city": "Brasília, DF",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Já é meu favorito",
    "text": "Invictus Victory Elixir é amor à primeira borrifada. Sofisticado e duradouro. Vale muito a pena.",
    "verified": true
   },
   {
    "name": "Davi P.",
    "city": "João Pessoa, PB",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Chegou perfeito",
    "text": "Invictus Victory Elixir é amor à primeira borrifada. Sofisticado e duradouro. Vale muito a pena.",
    "verified": true
   },
   {
    "name": "Gustavo D.",
    "city": "Porto Alegre, RS",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Apaixonado pela fragrância",
    "text": "Invictus Victory Elixir é amor à primeira borrifada. Sofisticado e duradouro. Vale muito a pena.",
    "verified": true
   },
   {
    "name": "Henrique C.",
    "city": "Campinas, SP",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Bom custo-benefício",
    "text": "Comprei o Invictus Victory Elixir e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   },
   {
    "name": "Fábio N.",
    "city": "São Paulo, SP",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Bom custo-benefício",
    "text": "Bom perfume, Invictus Victory Elixir tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "14",
  "slug": "azzaro-most-wanted-intense-masculino-eau-de-parfum",
  "name": "Azzaro The Most Wanted Intense Masculino Eau de Parfum",
  "category": "premium",
  "btu": 100,
  "price": 500,
  "oldPrice": 640,
  "installments": 10,
  "installmentValue": 49.9,
  "image": "/assets/p14-BBfj5kYG.webp",
  "gallery": [
   "/assets/p14-BBfj5kYG.webp",
   "/assets/p14-BBfj5kYG.webp",
   "/assets/p14-BBfj5kYG.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "50ml",
   "100ml"
  ],
  "sizePrices": {
   "50ml": {
    "price": 360,
    "oldPrice": 460
   },
   "100ml": {
    "price": 500,
    "oldPrice": 640
   }
  },
  "description": "Perfume masculino Azzaro — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.9,
  "reviews": 122,
  "bestseller": true,
  "reviewsList": [
   {
    "name": "André R.",
    "city": "Fortaleza, CE",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Surpreendeu demais",
    "text": "O Azzaro The Most Wanted Intense é simplesmente sensacional. Recebo elogios toda vez que uso. Entrega super rápida pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Daniel O.",
    "city": "Natal, RN",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Sensacional!",
    "text": "O Azzaro The Most Wanted Intense é simplesmente sensacional. Recebo elogios toda vez que uso. Entrega super rápida pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Alex M.",
    "city": "Curitiba, PR",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Cheiro incrível",
    "text": "O Azzaro The Most Wanted Intense é simplesmente sensacional. Recebo elogios toda vez que uso. Entrega super rápida pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Thiago L.",
    "city": "Florianópolis, SC",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Melhor compra do mês",
    "text": "O Azzaro The Most Wanted Intense é simplesmente sensacional. Recebo elogios toda vez que uso. Entrega super rápida pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Leandro V.",
    "city": "Maceió, AL",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Fragrância impecável",
    "text": "O Azzaro The Most Wanted Intense é simplesmente sensacional. Recebo elogios toda vez que uso. Entrega super rápida pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Renato P.",
    "city": "Recife, PE",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Muito bom",
    "text": "Bom perfume, Azzaro The Most Wanted Intense tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   },
   {
    "name": "Rafael D.",
    "city": "Vitória, ES",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Muito bom",
    "text": "Azzaro The Most Wanted Intense chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "15",
  "slug": "invictus-victory-perfume-masculino-eau-de-parfum",
  "name": "Invictus Victory Perfume Masculino Eau de Parfum",
  "category": "premium",
  "btu": 100,
  "price": 460,
  "oldPrice": 590,
  "installments": 10,
  "installmentValue": 45.9,
  "image": "/assets/p15-BwsDDclI.webp",
  "gallery": [
   "/assets/p15-BwsDDclI.webp",
   "/assets/p15-BwsDDclI.webp",
   "/assets/p15-BwsDDclI.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "50ml",
   "100ml"
  ],
  "sizePrices": {
   "50ml": {
    "price": 370,
    "oldPrice": 470
   },
   "100ml": {
    "price": 460,
    "oldPrice": 590
   }
  },
  "description": "Perfume masculino Importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.9,
  "reviews": 125,
  "bestseller": true,
  "reviewsList": [
   {
    "name": "Caio S.",
    "city": "Belo Horizonte, MG",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Original e maravilhoso",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O Invictus Victory é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Igor B.",
    "city": "Goiânia, GO",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Já é meu favorito",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O Invictus Victory é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Diego R.",
    "city": "Cuiabá, MT",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Chegou perfeito",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O Invictus Victory é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Vinícius O.",
    "city": "Salvador, BA",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Apaixonado pela fragrância",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O Invictus Victory é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Júlio M.",
    "city": "Manaus, AM",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Fixação absurda",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O Invictus Victory é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Lucas L.",
    "city": "Rio de Janeiro, RJ",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Atendeu as expectativas",
    "text": "Invictus Victory chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   },
   {
    "name": "Rodrigo V.",
    "city": "Brasília, DF",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Atendeu as expectativas",
    "text": "Comprei o Invictus Victory e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "16",
  "slug": "1-million-elixir-paco-rabanne-perfume-masculino-parfum-intense",
  "name": "One Million Elixir Paco Rabanne Perfume Masculino Parfum Intense",
  "category": "premium",
  "btu": 100,
  "price": 560,
  "oldPrice": 720,
  "installments": 10,
  "installmentValue": 55.9,
  "image": "/assets/p16-zmP3KTV4.webp",
  "gallery": [
   "/assets/p16-zmP3KTV4.webp",
   "/assets/p16-zmP3KTV4.webp",
   "/assets/p16-zmP3KTV4.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "50ml",
   "100ml",
   "200ml"
  ],
  "sizePrices": {
   "50ml": {
    "price": 460,
    "oldPrice": 590
   },
   "100ml": {
    "price": 560,
    "oldPrice": 720
   },
   "200ml": {
    "price": 760,
    "oldPrice": 970
   }
  },
  "description": "Perfume masculino Paco Rabanne — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.9,
  "reviews": 128,
  "bestseller": true,
  "reviewsList": [
   {
    "name": "Ricardo T.",
    "city": "João Pessoa, PB",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Sensacional!",
    "text": "Comprei o One Million Elixir Paco Rabanne e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Bruno F.",
    "city": "Porto Alegre, RS",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Cheiro incrível",
    "text": "Comprei o One Million Elixir Paco Rabanne e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Pedro S.",
    "city": "Campinas, SP",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Melhor compra do mês",
    "text": "Comprei o One Million Elixir Paco Rabanne e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Mateus B.",
    "city": "São Paulo, SP",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Fragrância impecável",
    "text": "Comprei o One Million Elixir Paco Rabanne e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Davi R.",
    "city": "Fortaleza, CE",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Vale cada centavo",
    "text": "Comprei o One Million Elixir Paco Rabanne e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Gustavo O.",
    "city": "Natal, RN",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Aprovado",
    "text": "Comprei o One Million Elixir Paco Rabanne e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   },
   {
    "name": "Henrique M.",
    "city": "Curitiba, PR",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Aprovado",
    "text": "Bom perfume, One Million Elixir Paco Rabanne tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "17",
  "slug": "versace-pour-homme-dylan-blue-eau-de-toilette",
  "name": "Versace Pour Homme Dylan Blue Eau de Toilette",
  "category": "premium",
  "btu": 100,
  "price": 390,
  "oldPrice": 500,
  "installments": 10,
  "installmentValue": 38.9,
  "image": "/assets/p17-CXRfRdjo.webp",
  "gallery": [
   "/assets/p17-CXRfRdjo.webp",
   "/assets/p17-CXRfRdjo.webp",
   "/assets/p17-CXRfRdjo.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "50ml",
   "100ml",
   "200ml"
  ],
  "sizePrices": {
   "50ml": {
    "price": 320,
    "oldPrice": 410
   },
   "100ml": {
    "price": 390,
    "oldPrice": 500
   },
   "200ml": {
    "price": 550,
    "oldPrice": 700
   }
  },
  "description": "Perfume masculino Versace — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.9,
  "reviews": 131,
  "bestseller": true,
  "reviewsList": [
   {
    "name": "Felipe A.",
    "city": "Florianópolis, SC",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Já é meu favorito",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O Versace Pour Homme Dylan Blue virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "André G.",
    "city": "Maceió, AL",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Chegou perfeito",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O Versace Pour Homme Dylan Blue virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Daniel T.",
    "city": "Recife, PE",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Apaixonado pela fragrância",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O Versace Pour Homme Dylan Blue virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Alex F.",
    "city": "Vitória, ES",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Fixação absurda",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O Versace Pour Homme Dylan Blue virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Thiago S.",
    "city": "Belo Horizonte, MG",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Surpreendeu demais",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O Versace Pour Homme Dylan Blue virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Leandro B.",
    "city": "Goiânia, GO",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Recomendo",
    "text": "Bom perfume, Versace Pour Homme Dylan Blue tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   },
   {
    "name": "Renato R.",
    "city": "Cuiabá, MT",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Recomendo",
    "text": "Versace Pour Homme Dylan Blue chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   }
  ],
  "gender": "unissex"
 },
 {
  "id": "18",
  "slug": "bad-boy-carolina-herrera-masculino-eau-de-toilette-edicao-recarregavel",
  "name": "Bad Boy Carolina Herrera Masculino Eau de Toilette Edição Recarregável",
  "category": "premium",
  "btu": 100,
  "price": 480,
  "oldPrice": 610,
  "installments": 10,
  "installmentValue": 47.9,
  "image": "/assets/p18-CYBvsHMR.webp",
  "gallery": [
   "/assets/p18-CYBvsHMR.webp",
   "/assets/p18-CYBvsHMR.webp",
   "/assets/p18-CYBvsHMR.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "50ml",
   "100ml",
   "150ml"
  ],
  "sizePrices": {
   "50ml": {
    "price": 390,
    "oldPrice": 500
   },
   "100ml": {
    "price": 480,
    "oldPrice": 610
   },
   "150ml": {
    "price": 630,
    "oldPrice": 810
   }
  },
  "description": "Perfume masculino Carolina Herrera — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.9,
  "reviews": 134,
  "bestseller": true,
  "reviewsList": [
   {
    "name": "Marcelo C.",
    "city": "Salvador, BA",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Cheiro incrível",
    "text": "Para quem ama Bad Boy Carolina Herrera, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Caio N.",
    "city": "Manaus, AM",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Melhor compra do mês",
    "text": "Para quem ama Bad Boy Carolina Herrera, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Igor A.",
    "city": "Rio de Janeiro, RJ",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Fragrância impecável",
    "text": "Para quem ama Bad Boy Carolina Herrera, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Diego G.",
    "city": "Brasília, DF",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Vale cada centavo",
    "text": "Para quem ama Bad Boy Carolina Herrera, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Vinícius T.",
    "city": "João Pessoa, PB",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Original e maravilhoso",
    "text": "Para quem ama Bad Boy Carolina Herrera, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Júlio F.",
    "city": "Porto Alegre, RS",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Cheiro gostoso",
    "text": "Bad Boy Carolina Herrera chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   },
   {
    "name": "Lucas S.",
    "city": "Campinas, SP",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Cheiro gostoso",
    "text": "Comprei o Bad Boy Carolina Herrera e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "19",
  "slug": "dior-sauvage-masculino-eau-de-toilette",
  "name": "Dior Sauvage Masculino Eau de Toilette",
  "category": "premium",
  "btu": 100,
  "price": 650,
  "oldPrice": 830,
  "installments": 10,
  "installmentValue": 64.9,
  "image": "/assets/p19-CUKlFIxs.webp",
  "gallery": [
   "/assets/p19-CUKlFIxs.webp",
   "/assets/p19-CUKlFIxs.webp",
   "/assets/p19-CUKlFIxs.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "60ml",
   "100ml",
   "200ml"
  ],
  "sizePrices": {
   "60ml": {
    "price": 540,
    "oldPrice": 690
   },
   "100ml": {
    "price": 650,
    "oldPrice": 830
   },
   "200ml": {
    "price": 880,
    "oldPrice": 1130
   }
  },
  "description": "Perfume masculino Dior — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.9,
  "reviews": 137,
  "bestseller": true,
  "reviewsList": [
   {
    "name": "Eduardo P.",
    "city": "São Paulo, SP",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Chegou perfeito",
    "text": "Já conhecia o Dior Sauvage e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Ricardo D.",
    "city": "Fortaleza, CE",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Apaixonado pela fragrância",
    "text": "Já conhecia o Dior Sauvage e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Bruno C.",
    "city": "Natal, RN",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Fixação absurda",
    "text": "Já conhecia o Dior Sauvage e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Pedro N.",
    "city": "Curitiba, PR",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Surpreendeu demais",
    "text": "Já conhecia o Dior Sauvage e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Mateus A.",
    "city": "Florianópolis, SC",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Sensacional!",
    "text": "Já conhecia o Dior Sauvage e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Davi G.",
    "city": "Maceió, AL",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Gostei bastante",
    "text": "Comprei o Dior Sauvage e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   },
   {
    "name": "Gustavo T.",
    "city": "Recife, PE",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Gostei bastante",
    "text": "Bom perfume, Dior Sauvage tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "20",
  "slug": "cool-water-masculino-eau-de-toilette",
  "name": "Cool Water Masculino Eau de Toilette",
  "category": "promocao",
  "btu": 100,
  "price": 550,
  "oldPrice": 700,
  "installments": 10,
  "installmentValue": 54.9,
  "image": "/assets/p20-TEB9Rv8Y.webp",
  "gallery": [
   "/assets/p20-TEB9Rv8Y.webp",
   "/assets/p20-TEB9Rv8Y.webp",
   "/assets/p20-TEB9Rv8Y.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "75ml",
   "125ml",
   "200ml"
  ],
  "sizePrices": {
   "75ml": {
    "price": 340,
    "oldPrice": 440
   },
   "125ml": {
    "price": 420,
    "oldPrice": 540
   },
   "200ml": {
    "price": 550,
    "oldPrice": 700
   }
  },
  "description": "Perfume masculino Importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 140,
  "reviewsList": [
   {
    "name": "Fábio L.",
    "city": "Vitória, ES",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Melhor compra do mês",
    "text": "Cool Water é amor à primeira borrifada. Sofisticado e duradouro. Vale muito a pena.",
    "verified": true
   },
   {
    "name": "Felipe V.",
    "city": "Belo Horizonte, MG",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Fragrância impecável",
    "text": "Cool Water é amor à primeira borrifada. Sofisticado e duradouro. Vale muito a pena.",
    "verified": true
   },
   {
    "name": "André P.",
    "city": "Goiânia, GO",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Vale cada centavo",
    "text": "Cool Water é amor à primeira borrifada. Sofisticado e duradouro. Vale muito a pena.",
    "verified": true
   },
   {
    "name": "Daniel D.",
    "city": "Cuiabá, MT",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Original e maravilhoso",
    "text": "Cool Water é amor à primeira borrifada. Sofisticado e duradouro. Vale muito a pena.",
    "verified": true
   },
   {
    "name": "Alex C.",
    "city": "Salvador, BA",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Já é meu favorito",
    "text": "Cool Water é amor à primeira borrifada. Sofisticado e duradouro. Vale muito a pena.",
    "verified": true
   },
   {
    "name": "Thiago N.",
    "city": "Manaus, AM",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Bom custo-benefício",
    "text": "Bom perfume, Cool Water tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   },
   {
    "name": "Leandro A.",
    "city": "Rio de Janeiro, RJ",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Bom custo-benefício",
    "text": "Cool Water chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "21",
  "slug": "hugo-boss-bottled-for-men-perfume-masculino-eau-de-parfum",
  "name": "Hugo Boss Bottled For Men Perfume Masculino Eau de Parfum",
  "category": "importado",
  "btu": 100,
  "price": 400,
  "oldPrice": 510,
  "installments": 10,
  "installmentValue": 39.9,
  "image": "/assets/p21-DsBImuUo.webp",
  "gallery": [
   "/assets/p21-DsBImuUo.webp",
   "/assets/p21-DsBImuUo.webp",
   "/assets/p21-DsBImuUo.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "50ml",
   "100ml",
   "200ml"
  ],
  "sizePrices": {
   "50ml": {
    "price": 340,
    "oldPrice": 440
   },
   "100ml": {
    "price": 400,
    "oldPrice": 510
   },
   "200ml": {
    "price": 550,
    "oldPrice": 700
   }
  },
  "description": "Perfume masculino Hugo Boss — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 143,
  "reviewsList": [
   {
    "name": "Rafael O.",
    "city": "Brasília, DF",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Apaixonado pela fragrância",
    "text": "O Hugo Boss Bottled For Men é simplesmente sensacional. Recebo elogios toda vez que uso. Entrega super rápida pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Marcelo M.",
    "city": "João Pessoa, PB",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Fixação absurda",
    "text": "O Hugo Boss Bottled For Men é simplesmente sensacional. Recebo elogios toda vez que uso. Entrega super rápida pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Caio L.",
    "city": "Porto Alegre, RS",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Surpreendeu demais",
    "text": "O Hugo Boss Bottled For Men é simplesmente sensacional. Recebo elogios toda vez que uso. Entrega super rápida pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Igor V.",
    "city": "Campinas, SP",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Sensacional!",
    "text": "O Hugo Boss Bottled For Men é simplesmente sensacional. Recebo elogios toda vez que uso. Entrega super rápida pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Diego P.",
    "city": "São Paulo, SP",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Cheiro incrível",
    "text": "O Hugo Boss Bottled For Men é simplesmente sensacional. Recebo elogios toda vez que uso. Entrega super rápida pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Vinícius D.",
    "city": "Fortaleza, CE",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Muito bom",
    "text": "Hugo Boss Bottled For Men chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   },
   {
    "name": "Júlio C.",
    "city": "Natal, RN",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Muito bom",
    "text": "Comprei o Hugo Boss Bottled For Men e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "22",
  "slug": "le-male-masculino-eau-de-toilette",
  "name": "Le Male Masculino Eau de Toilette",
  "category": "importado",
  "btu": 100,
  "price": 940,
  "oldPrice": 1200,
  "installments": 10,
  "installmentValue": 93.9,
  "image": "/assets/p22-BVDdErIq.webp",
  "gallery": [
   "/assets/p22-BVDdErIq.webp",
   "/assets/p22-BVDdErIq.webp",
   "/assets/p22-BVDdErIq.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "75ml",
   "125ml",
   "200ml"
  ],
  "sizePrices": {
   "75ml": {
    "price": 550,
    "oldPrice": 700
   },
   "125ml": {
    "price": 730,
    "oldPrice": 940
   },
   "200ml": {
    "price": 940,
    "oldPrice": 1200
   }
  },
  "description": "Perfume masculino Importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 146,
  "reviewsList": [
   {
    "name": "Rodrigo B.",
    "city": "Curitiba, PR",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Fragrância impecável",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O Le Male é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Eduardo R.",
    "city": "Florianópolis, SC",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Vale cada centavo",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O Le Male é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Ricardo O.",
    "city": "Maceió, AL",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Original e maravilhoso",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O Le Male é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Bruno M.",
    "city": "Recife, PE",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Já é meu favorito",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O Le Male é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Pedro L.",
    "city": "Vitória, ES",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Chegou perfeito",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O Le Male é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Mateus V.",
    "city": "Belo Horizonte, MG",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Atendeu as expectativas",
    "text": "Comprei o Le Male e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   },
   {
    "name": "Davi P.",
    "city": "Goiânia, GO",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Atendeu as expectativas",
    "text": "Bom perfume, Le Male tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "23",
  "slug": "versace-eros-energy-perfume-masculino-eau-de-parfum",
  "name": "Versace Eros Energy Perfume Masculino Eau de Parfum",
  "category": "importado",
  "btu": 100,
  "price": 450,
  "oldPrice": 580,
  "installments": 10,
  "installmentValue": 44.9,
  "image": "/assets/p23-w14bHwqM.webp",
  "gallery": [
   "/assets/p23-w14bHwqM.webp",
   "/assets/p23-w14bHwqM.webp",
   "/assets/p23-w14bHwqM.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "50ml",
   "100ml"
  ],
  "sizePrices": {
   "50ml": {
    "price": 370,
    "oldPrice": 470
   },
   "100ml": {
    "price": 450,
    "oldPrice": 580
   }
  },
  "description": "Perfume masculino Versace — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 149,
  "reviewsList": [
   {
    "name": "Henrique F.",
    "city": "Cuiabá, MT",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Fixação absurda",
    "text": "Comprei o Versace Eros Energy e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Fábio S.",
    "city": "Salvador, BA",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Surpreendeu demais",
    "text": "Comprei o Versace Eros Energy e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Felipe B.",
    "city": "Manaus, AM",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Sensacional!",
    "text": "Comprei o Versace Eros Energy e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "André R.",
    "city": "Rio de Janeiro, RJ",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Cheiro incrível",
    "text": "Comprei o Versace Eros Energy e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Daniel O.",
    "city": "Brasília, DF",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Melhor compra do mês",
    "text": "Comprei o Versace Eros Energy e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Alex M.",
    "city": "João Pessoa, PB",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Aprovado",
    "text": "Bom perfume, Versace Eros Energy tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   },
   {
    "name": "Thiago L.",
    "city": "Porto Alegre, RS",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Aprovado",
    "text": "Versace Eros Energy chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "24",
  "slug": "jean-paul-gaultier-le-beau-le-parfum-masculino-edp-1",
  "name": "Jean Paul Gaultier Le Beau Le Parfum Masculino Eau de Parfum",
  "category": "premium",
  "btu": 100,
  "price": 1000,
  "oldPrice": 1280,
  "installments": 10,
  "installmentValue": 99.9,
  "image": "/assets/p24-BMxMRJp5.webp",
  "gallery": [
   "/assets/p24-BMxMRJp5.webp",
   "/assets/p24-BMxMRJp5.webp",
   "/assets/p24-BMxMRJp5.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "75ml",
   "125ml"
  ],
  "sizePrices": {
   "75ml": {
    "price": 780,
    "oldPrice": 1000
   },
   "125ml": {
    "price": 1000,
    "oldPrice": 1280
   }
  },
  "description": "Perfume masculino Jean Paul Gaultier — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.9,
  "reviews": 152,
  "bestseller": true,
  "reviewsList": [
   {
    "name": "Renato G.",
    "city": "Campinas, SP",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Vale cada centavo",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O Jean Paul Gaultier Le Beau Le Parfum virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Rafael T.",
    "city": "São Paulo, SP",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Original e maravilhoso",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O Jean Paul Gaultier Le Beau Le Parfum virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Marcelo F.",
    "city": "Fortaleza, CE",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Já é meu favorito",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O Jean Paul Gaultier Le Beau Le Parfum virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Caio S.",
    "city": "Natal, RN",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Chegou perfeito",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O Jean Paul Gaultier Le Beau Le Parfum virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Igor B.",
    "city": "Curitiba, PR",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Apaixonado pela fragrância",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O Jean Paul Gaultier Le Beau Le Parfum virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Diego R.",
    "city": "Florianópolis, SC",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Recomendo",
    "text": "Jean Paul Gaultier Le Beau Le Parfum chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   },
   {
    "name": "Vinícius O.",
    "city": "Maceió, AL",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Recomendo",
    "text": "Comprei o Jean Paul Gaultier Le Beau Le Parfum e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "25",
  "slug": "ultra-male-masculino-eau-de-toilette-intense",
  "name": "Ultra Male Masculino Eau de Toilette Intense",
  "category": "premium",
  "btu": 100,
  "price": 700,
  "oldPrice": 900,
  "installments": 10,
  "installmentValue": 69.9,
  "image": "/assets/p25-B8HWWLH9.webp",
  "gallery": [
   "/assets/p25-B8HWWLH9.webp",
   "/assets/p25-B8HWWLH9.webp",
   "/assets/p25-B8HWWLH9.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "75ml",
   "125ml"
  ],
  "sizePrices": {
   "75ml": {
    "price": 550,
    "oldPrice": 700
   },
   "125ml": {
    "price": 700,
    "oldPrice": 900
   }
  },
  "description": "Perfume masculino Importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.9,
  "reviews": 155,
  "bestseller": true,
  "reviewsList": [
   {
    "name": "Lucas N.",
    "city": "Recife, PE",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Surpreendeu demais",
    "text": "Para quem ama Ultra Male, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Rodrigo A.",
    "city": "Vitória, ES",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Sensacional!",
    "text": "Para quem ama Ultra Male, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Eduardo G.",
    "city": "Belo Horizonte, MG",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Cheiro incrível",
    "text": "Para quem ama Ultra Male, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Ricardo T.",
    "city": "Goiânia, GO",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Melhor compra do mês",
    "text": "Para quem ama Ultra Male, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Bruno F.",
    "city": "Cuiabá, MT",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Fragrância impecável",
    "text": "Para quem ama Ultra Male, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Pedro S.",
    "city": "Salvador, BA",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Cheiro gostoso",
    "text": "Comprei o Ultra Male e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   },
   {
    "name": "Mateus B.",
    "city": "Manaus, AM",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Cheiro gostoso",
    "text": "Bom perfume, Ultra Male tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "26",
  "slug": "versace-man-eau-fraiche-masculino-eau-de-toilette",
  "name": "Versace Man Eau Fraiche Masculino Eau de Toilette",
  "category": "importado",
  "btu": 100,
  "price": 390,
  "oldPrice": 500,
  "installments": 10,
  "installmentValue": 38.9,
  "image": "/assets/p26-BTz5WqjE.webp",
  "gallery": [
   "/assets/p26-BTz5WqjE.webp",
   "/assets/p26-BTz5WqjE.webp",
   "/assets/p26-BTz5WqjE.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "50ml",
   "100ml",
   "200ml"
  ],
  "sizePrices": {
   "50ml": {
    "price": 320,
    "oldPrice": 410
   },
   "100ml": {
    "price": 390,
    "oldPrice": 500
   },
   "200ml": {
    "price": 540,
    "oldPrice": 690
   }
  },
  "description": "Perfume masculino Versace — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 158,
  "reviewsList": [
   {
    "name": "Gustavo D.",
    "city": "Rio de Janeiro, RJ",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Original e maravilhoso",
    "text": "Já conhecia o Versace Man Eau Fraiche e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Henrique C.",
    "city": "Brasília, DF",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Já é meu favorito",
    "text": "Já conhecia o Versace Man Eau Fraiche e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Fábio N.",
    "city": "João Pessoa, PB",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Chegou perfeito",
    "text": "Já conhecia o Versace Man Eau Fraiche e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Felipe A.",
    "city": "Porto Alegre, RS",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Apaixonado pela fragrância",
    "text": "Já conhecia o Versace Man Eau Fraiche e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "André G.",
    "city": "Campinas, SP",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Fixação absurda",
    "text": "Já conhecia o Versace Man Eau Fraiche e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Daniel T.",
    "city": "São Paulo, SP",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Gostei bastante",
    "text": "Bom perfume, Versace Man Eau Fraiche tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   },
   {
    "name": "Alex F.",
    "city": "Fortaleza, CE",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Gostei bastante",
    "text": "Versace Man Eau Fraiche chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "27",
  "slug": "le-male-le-parfum-perfume-masculino-eau-de-parfum-intense",
  "name": "Le Male Le Parfum Perfume Masculino Eau de Parfum Intense",
  "category": "premium",
  "btu": 100,
  "price": 1260,
  "oldPrice": 1610,
  "installments": 10,
  "installmentValue": 125.9,
  "image": "/assets/p27-Rl6elk6u.webp",
  "gallery": [
   "/assets/p27-Rl6elk6u.webp",
   "/assets/p27-Rl6elk6u.webp",
   "/assets/p27-Rl6elk6u.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "75ml",
   "125ml",
   "200ml"
  ],
  "sizePrices": {
   "75ml": {
    "price": 860,
    "oldPrice": 1100
   },
   "125ml": {
    "price": 1020,
    "oldPrice": 1310
   },
   "200ml": {
    "price": 1260,
    "oldPrice": 1610
   }
  },
  "description": "Perfume masculino Importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.9,
  "reviews": 161,
  "bestseller": true,
  "reviewsList": [
   {
    "name": "Leandro V.",
    "city": "Natal, RN",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Sensacional!",
    "text": "Le Male Le Parfum é amor à primeira borrifada. Sofisticado e duradouro. Vale muito a pena.",
    "verified": true
   },
   {
    "name": "Renato P.",
    "city": "Curitiba, PR",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Cheiro incrível",
    "text": "Le Male Le Parfum é amor à primeira borrifada. Sofisticado e duradouro. Vale muito a pena.",
    "verified": true
   },
   {
    "name": "Rafael D.",
    "city": "Florianópolis, SC",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Melhor compra do mês",
    "text": "Le Male Le Parfum é amor à primeira borrifada. Sofisticado e duradouro. Vale muito a pena.",
    "verified": true
   },
   {
    "name": "Marcelo C.",
    "city": "Maceió, AL",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Fragrância impecável",
    "text": "Le Male Le Parfum é amor à primeira borrifada. Sofisticado e duradouro. Vale muito a pena.",
    "verified": true
   },
   {
    "name": "Caio N.",
    "city": "Recife, PE",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Vale cada centavo",
    "text": "Le Male Le Parfum é amor à primeira borrifada. Sofisticado e duradouro. Vale muito a pena.",
    "verified": true
   },
   {
    "name": "Igor A.",
    "city": "Vitória, ES",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Bom custo-benefício",
    "text": "Le Male Le Parfum chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   },
   {
    "name": "Diego G.",
    "city": "Belo Horizonte, MG",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Bom custo-benefício",
    "text": "Comprei o Le Male Le Parfum e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "28",
  "slug": "dior-sauvage-masculino-eau-de-parfum",
  "name": "Dior Sauvage Masculino Eau de Parfum",
  "category": "premium",
  "btu": 100,
  "price": 790,
  "oldPrice": 1010,
  "installments": 10,
  "installmentValue": 78.9,
  "image": "/assets/p28-BYqlJqjg.webp",
  "gallery": [
   "/assets/p28-BYqlJqjg.webp",
   "/assets/p28-BYqlJqjg.webp",
   "/assets/p28-BYqlJqjg.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "60ml",
   "100ml",
   "200ml"
  ],
  "sizePrices": {
   "60ml": {
    "price": 640,
    "oldPrice": 820
   },
   "100ml": {
    "price": 790,
    "oldPrice": 1010
   },
   "200ml": {
    "price": 1050,
    "oldPrice": 1340
   }
  },
  "description": "Perfume masculino Dior — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.9,
  "reviews": 164,
  "bestseller": true,
  "reviewsList": [
   {
    "name": "Júlio M.",
    "city": "Goiânia, GO",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Já é meu favorito",
    "text": "O Dior Sauvage é simplesmente sensacional. Recebo elogios toda vez que uso. Entrega super rápida pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Lucas L.",
    "city": "Cuiabá, MT",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Chegou perfeito",
    "text": "O Dior Sauvage é simplesmente sensacional. Recebo elogios toda vez que uso. Entrega super rápida pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Rodrigo V.",
    "city": "Salvador, BA",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Apaixonado pela fragrância",
    "text": "O Dior Sauvage é simplesmente sensacional. Recebo elogios toda vez que uso. Entrega super rápida pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Eduardo P.",
    "city": "Manaus, AM",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Fixação absurda",
    "text": "O Dior Sauvage é simplesmente sensacional. Recebo elogios toda vez que uso. Entrega super rápida pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Ricardo D.",
    "city": "Rio de Janeiro, RJ",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Surpreendeu demais",
    "text": "O Dior Sauvage é simplesmente sensacional. Recebo elogios toda vez que uso. Entrega super rápida pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Bruno C.",
    "city": "Brasília, DF",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Muito bom",
    "text": "Comprei o Dior Sauvage e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   },
   {
    "name": "Pedro N.",
    "city": "João Pessoa, PB",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Muito bom",
    "text": "Bom perfume, Dior Sauvage tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "29",
  "slug": "yves-saint-laurent-refillable-myslf-masculino-le-parfum",
  "name": "Yves Saint Laurent Refillable MYSLF Masculino Le Parfum",
  "category": "premium",
  "btu": 100,
  "price": 780,
  "oldPrice": 1000,
  "installments": 10,
  "installmentValue": 77.9,
  "image": "/assets/p29-pVbxrfU6.webp",
  "gallery": [
   "/assets/p29-pVbxrfU6.webp",
   "/assets/p29-pVbxrfU6.webp",
   "/assets/p29-pVbxrfU6.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "60ml",
   "100ml"
  ],
  "sizePrices": {
   "60ml": {
    "price": 610,
    "oldPrice": 780
   },
   "100ml": {
    "price": 780,
    "oldPrice": 1000
   }
  },
  "description": "Perfume masculino Yves Saint Laurent — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.9,
  "reviews": 167,
  "bestseller": true,
  "reviewsList": [
   {
    "name": "Davi R.",
    "city": "Porto Alegre, RS",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Cheiro incrível",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O Yves Saint Laurent Refillable MYSLF é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Gustavo O.",
    "city": "Campinas, SP",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Melhor compra do mês",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O Yves Saint Laurent Refillable MYSLF é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Henrique M.",
    "city": "São Paulo, SP",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Fragrância impecável",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O Yves Saint Laurent Refillable MYSLF é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Fábio L.",
    "city": "Fortaleza, CE",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Vale cada centavo",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O Yves Saint Laurent Refillable MYSLF é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Felipe V.",
    "city": "Natal, RN",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Original e maravilhoso",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O Yves Saint Laurent Refillable MYSLF é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "André P.",
    "city": "Curitiba, PR",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Atendeu as expectativas",
    "text": "Bom perfume, Yves Saint Laurent Refillable MYSLF tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   },
   {
    "name": "Daniel D.",
    "city": "Florianópolis, SC",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Atendeu as expectativas",
    "text": "Yves Saint Laurent Refillable MYSLF chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "30",
  "slug": "jean-paul-gaultier-le-beau-le-paradise-garden-parfum-masculino-eau-de-parfum",
  "name": "Jean Paul Gaultier Le Beau Le Paradise Garden Parfum Masculino Eau de Parfum",
  "category": "premium",
  "btu": 100,
  "price": 730,
  "oldPrice": 940,
  "installments": 10,
  "installmentValue": 72.9,
  "image": "/assets/p30-ndhX6wYj.webp",
  "gallery": [
   "/assets/p30-ndhX6wYj.webp",
   "/assets/p30-ndhX6wYj.webp",
   "/assets/p30-ndhX6wYj.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "75ml",
   "125ml"
  ],
  "sizePrices": {
   "75ml": {
    "price": 570,
    "oldPrice": 730
   },
   "125ml": {
    "price": 730,
    "oldPrice": 940
   }
  },
  "description": "Perfume masculino Jean Paul Gaultier — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.9,
  "reviews": 170,
  "bestseller": true,
  "reviewsList": [
   {
    "name": "Thiago S.",
    "city": "Maceió, AL",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Chegou perfeito",
    "text": "Comprei o Jean Paul Gaultier Le Beau Le Paradise Garden Parfum e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Leandro B.",
    "city": "Recife, PE",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Apaixonado pela fragrância",
    "text": "Comprei o Jean Paul Gaultier Le Beau Le Paradise Garden Parfum e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Renato R.",
    "city": "Vitória, ES",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Fixação absurda",
    "text": "Comprei o Jean Paul Gaultier Le Beau Le Paradise Garden Parfum e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Rafael O.",
    "city": "Belo Horizonte, MG",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Surpreendeu demais",
    "text": "Comprei o Jean Paul Gaultier Le Beau Le Paradise Garden Parfum e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Marcelo M.",
    "city": "Goiânia, GO",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Sensacional!",
    "text": "Comprei o Jean Paul Gaultier Le Beau Le Paradise Garden Parfum e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Caio L.",
    "city": "Cuiabá, MT",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Aprovado",
    "text": "Jean Paul Gaultier Le Beau Le Paradise Garden Parfum chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   },
   {
    "name": "Igor V.",
    "city": "Salvador, BA",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Aprovado",
    "text": "Comprei o Jean Paul Gaultier Le Beau Le Paradise Garden Parfum e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "31",
  "slug": "silver-scent-intense-masculino-eau-de-toilette",
  "name": "Silver Scent Intense Masculino Eau de Toilette",
  "category": "promocao",
  "btu": 100,
  "price": 210,
  "oldPrice": 270,
  "installments": 10,
  "installmentValue": 20.9,
  "image": "/assets/p31-D5OBrXk3.webp",
  "gallery": [
   "/assets/p31-D5OBrXk3.webp",
   "/assets/p31-D5OBrXk3.webp",
   "/assets/p31-D5OBrXk3.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "100ml"
  ],
  "sizePrices": {
   "100ml": {
    "price": 210,
    "oldPrice": 270
   }
  },
  "description": "Perfume masculino Importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 173,
  "reviewsList": [
   {
    "name": "Vinícius T.",
    "city": "Manaus, AM",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Melhor compra do mês",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O Silver Scent Intense virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Júlio F.",
    "city": "Rio de Janeiro, RJ",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Fragrância impecável",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O Silver Scent Intense virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Lucas S.",
    "city": "Brasília, DF",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Vale cada centavo",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O Silver Scent Intense virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Rodrigo B.",
    "city": "João Pessoa, PB",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Original e maravilhoso",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O Silver Scent Intense virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Eduardo R.",
    "city": "Porto Alegre, RS",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Já é meu favorito",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O Silver Scent Intense virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Ricardo O.",
    "city": "Campinas, SP",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Recomendo",
    "text": "Comprei o Silver Scent Intense e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   },
   {
    "name": "Bruno M.",
    "city": "São Paulo, SP",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Recomendo",
    "text": "Bom perfume, Silver Scent Intense tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "32",
  "slug": "bad-boy-extreme-carolina-herrera-masculino-eau-de-parfum",
  "name": "Bad Boy Extreme Carolina Herrera Masculino Eau de Parfum",
  "category": "importado",
  "btu": 100,
  "price": 480,
  "oldPrice": 610,
  "installments": 10,
  "installmentValue": 47.9,
  "image": "/assets/p32-Dp3Nkyth.webp",
  "gallery": [
   "/assets/p32-Dp3Nkyth.webp",
   "/assets/p32-Dp3Nkyth.webp",
   "/assets/p32-Dp3Nkyth.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "50ml",
   "100ml"
  ],
  "sizePrices": {
   "50ml": {
    "price": 390,
    "oldPrice": 500
   },
   "100ml": {
    "price": 480,
    "oldPrice": 610
   }
  },
  "description": "Perfume masculino Carolina Herrera — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 176,
  "reviewsList": [
   {
    "name": "Mateus A.",
    "city": "Fortaleza, CE",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Apaixonado pela fragrância",
    "text": "Para quem ama Bad Boy Extreme Carolina Herrera, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Davi G.",
    "city": "Natal, RN",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Fixação absurda",
    "text": "Para quem ama Bad Boy Extreme Carolina Herrera, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Gustavo T.",
    "city": "Curitiba, PR",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Surpreendeu demais",
    "text": "Para quem ama Bad Boy Extreme Carolina Herrera, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Henrique F.",
    "city": "Florianópolis, SC",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Sensacional!",
    "text": "Para quem ama Bad Boy Extreme Carolina Herrera, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Fábio S.",
    "city": "Maceió, AL",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Cheiro incrível",
    "text": "Para quem ama Bad Boy Extreme Carolina Herrera, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Felipe B.",
    "city": "Recife, PE",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Cheiro gostoso",
    "text": "Bom perfume, Bad Boy Extreme Carolina Herrera tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   },
   {
    "name": "André R.",
    "city": "Vitória, ES",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Cheiro gostoso",
    "text": "Bad Boy Extreme Carolina Herrera chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "33",
  "slug": "hugo-boss-man-eau-de-toilette",
  "name": "Hugo Boss Man Eau de Toilette",
  "category": "importado",
  "btu": 100,
  "price": 900,
  "oldPrice": 1150,
  "installments": 10,
  "installmentValue": 89.9,
  "image": "/assets/p33-BPFhcAR5.webp",
  "gallery": [
   "/assets/p33-BPFhcAR5.webp",
   "/assets/p33-BPFhcAR5.webp",
   "/assets/p33-BPFhcAR5.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "75ml",
   "125ml",
   "200ml"
  ],
  "sizePrices": {
   "75ml": {
    "price": 570,
    "oldPrice": 730
   },
   "125ml": {
    "price": 730,
    "oldPrice": 940
   },
   "200ml": {
    "price": 900,
    "oldPrice": 1150
   }
  },
  "description": "Perfume masculino Hugo Boss — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 179,
  "reviewsList": [
   {
    "name": "Alex C.",
    "city": "Belo Horizonte, MG",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Fragrância impecável",
    "text": "Já conhecia o Hugo Boss Man e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Thiago N.",
    "city": "Goiânia, GO",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Vale cada centavo",
    "text": "Já conhecia o Hugo Boss Man e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Leandro A.",
    "city": "Cuiabá, MT",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Original e maravilhoso",
    "text": "Já conhecia o Hugo Boss Man e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Renato G.",
    "city": "Salvador, BA",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Já é meu favorito",
    "text": "Já conhecia o Hugo Boss Man e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Rafael T.",
    "city": "Manaus, AM",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Chegou perfeito",
    "text": "Já conhecia o Hugo Boss Man e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Marcelo F.",
    "city": "Rio de Janeiro, RJ",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Gostei bastante",
    "text": "Hugo Boss Man chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   },
   {
    "name": "Caio S.",
    "city": "Brasília, DF",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Gostei bastante",
    "text": "Comprei o Hugo Boss Man e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   }
  ],
  "gender": "unissex"
 },
 {
  "id": "34",
  "slug": "night-caviar-paris-elysees-perfume-masculino",
  "name": "Night Caviar Paris Elysees Perfume Masculino",
  "category": "promocao",
  "btu": 100,
  "price": 70,
  "oldPrice": 90,
  "installments": 10,
  "installmentValue": 7.2,
  "image": "/assets/p34-D_d_-hyE.webp",
  "gallery": [
   "/assets/p34-D_d_-hyE.webp",
   "/assets/p34-D_d_-hyE.webp",
   "/assets/p34-D_d_-hyE.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "100ml"
  ],
  "sizePrices": {
   "100ml": {
    "price": 70,
    "oldPrice": 90
   }
  },
  "description": "Perfume masculino Paris Elysees — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 182,
  "reviewsList": [
   {
    "name": "Diego P.",
    "city": "João Pessoa, PB",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Fixação absurda",
    "text": "Night Caviar Paris Elysees é amor à primeira borrifada. Sofisticado e duradouro. Vale muito a pena.",
    "verified": true
   },
   {
    "name": "Vinícius D.",
    "city": "Porto Alegre, RS",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Surpreendeu demais",
    "text": "Night Caviar Paris Elysees é amor à primeira borrifada. Sofisticado e duradouro. Vale muito a pena.",
    "verified": true
   },
   {
    "name": "Júlio C.",
    "city": "Campinas, SP",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Sensacional!",
    "text": "Night Caviar Paris Elysees é amor à primeira borrifada. Sofisticado e duradouro. Vale muito a pena.",
    "verified": true
   },
   {
    "name": "Lucas N.",
    "city": "São Paulo, SP",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Cheiro incrível",
    "text": "Night Caviar Paris Elysees é amor à primeira borrifada. Sofisticado e duradouro. Vale muito a pena.",
    "verified": true
   },
   {
    "name": "Rodrigo A.",
    "city": "Fortaleza, CE",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Melhor compra do mês",
    "text": "Night Caviar Paris Elysees é amor à primeira borrifada. Sofisticado e duradouro. Vale muito a pena.",
    "verified": true
   },
   {
    "name": "Eduardo G.",
    "city": "Natal, RN",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Bom custo-benefício",
    "text": "Comprei o Night Caviar Paris Elysees e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   },
   {
    "name": "Ricardo T.",
    "city": "Curitiba, PR",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Bom custo-benefício",
    "text": "Bom perfume, Night Caviar Paris Elysees tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "35",
  "slug": "yves-saint-laurent-y-perfume-masculino-eau-de-parfum",
  "name": "Yves Saint Laurent Y Perfume Masculino Eau de Parfum",
  "category": "premium",
  "btu": 100,
  "price": 690,
  "oldPrice": 880,
  "installments": 10,
  "installmentValue": 68.9,
  "image": "/assets/p35-CBNQ1yLH.webp",
  "gallery": [
   "/assets/p35-CBNQ1yLH.webp",
   "/assets/p35-CBNQ1yLH.webp",
   "/assets/p35-CBNQ1yLH.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "60ml",
   "100ml",
   "200ml"
  ],
  "sizePrices": {
   "60ml": {
    "price": 540,
    "oldPrice": 690
   },
   "100ml": {
    "price": 690,
    "oldPrice": 880
   },
   "200ml": {
    "price": 900,
    "oldPrice": 1150
   }
  },
  "description": "Perfume masculino Yves Saint Laurent — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.9,
  "reviews": 185,
  "bestseller": true,
  "reviewsList": [
   {
    "name": "Pedro L.",
    "city": "Florianópolis, SC",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Vale cada centavo",
    "text": "O Yves Saint Laurent Y é simplesmente sensacional. Recebo elogios toda vez que uso. Entrega super rápida pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Mateus V.",
    "city": "Maceió, AL",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Original e maravilhoso",
    "text": "O Yves Saint Laurent Y é simplesmente sensacional. Recebo elogios toda vez que uso. Entrega super rápida pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Davi P.",
    "city": "Recife, PE",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Já é meu favorito",
    "text": "O Yves Saint Laurent Y é simplesmente sensacional. Recebo elogios toda vez que uso. Entrega super rápida pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Gustavo D.",
    "city": "Vitória, ES",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Chegou perfeito",
    "text": "O Yves Saint Laurent Y é simplesmente sensacional. Recebo elogios toda vez que uso. Entrega super rápida pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Henrique C.",
    "city": "Belo Horizonte, MG",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Apaixonado pela fragrância",
    "text": "O Yves Saint Laurent Y é simplesmente sensacional. Recebo elogios toda vez que uso. Entrega super rápida pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Fábio N.",
    "city": "Goiânia, GO",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Muito bom",
    "text": "Bom perfume, Yves Saint Laurent Y tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   },
   {
    "name": "Felipe A.",
    "city": "Cuiabá, MT",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Muito bom",
    "text": "Yves Saint Laurent Y chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "36",
  "slug": "boss-bottled-night-masculino-eau-de-toilette",
  "name": "Boss Bottled Night Masculino Eau de Toilette",
  "category": "importado",
  "btu": 100,
  "price": 350,
  "oldPrice": 450,
  "installments": 10,
  "installmentValue": 34.9,
  "image": "/assets/p36-DfAtjit3.webp",
  "gallery": [
   "/assets/p36-DfAtjit3.webp",
   "/assets/p36-DfAtjit3.webp",
   "/assets/p36-DfAtjit3.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "50ml",
   "100ml",
   "200ml"
  ],
  "sizePrices": {
   "50ml": {
    "price": 280,
    "oldPrice": 360
   },
   "100ml": {
    "price": 350,
    "oldPrice": 450
   },
   "200ml": {
    "price": 470,
    "oldPrice": 600
   }
  },
  "description": "Perfume masculino Importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 188,
  "reviewsList": [
   {
    "name": "Daniel O.",
    "city": "Salvador, BA",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Surpreendeu demais",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O Boss Bottled Night é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Alex M.",
    "city": "Manaus, AM",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Sensacional!",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O Boss Bottled Night é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Thiago L.",
    "city": "Rio de Janeiro, RJ",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Cheiro incrível",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O Boss Bottled Night é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Leandro V.",
    "city": "Brasília, DF",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Melhor compra do mês",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O Boss Bottled Night é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Renato P.",
    "city": "João Pessoa, PB",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Fragrância impecável",
    "text": "Embalagem caprichada, frasco original, projeção excelente. O Boss Bottled Night é dos melhores que já tive. Já é o segundo frasco que peço.",
    "verified": true
   },
   {
    "name": "Rafael D.",
    "city": "Porto Alegre, RS",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Atendeu as expectativas",
    "text": "Boss Bottled Night chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   },
   {
    "name": "Marcelo C.",
    "city": "Campinas, SP",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Atendeu as expectativas",
    "text": "Comprei o Boss Bottled Night e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "37",
  "slug": "animale-masculino-eau-de-toilette",
  "name": "Animale Masculino Eau de Toilette",
  "category": "importado",
  "btu": 100,
  "price": 120,
  "oldPrice": 150,
  "installments": 10,
  "installmentValue": 11.9,
  "image": "/assets/p37-DpeP0Ot8.webp",
  "gallery": [
   "/assets/p37-DpeP0Ot8.webp",
   "/assets/p37-DpeP0Ot8.webp",
   "/assets/p37-DpeP0Ot8.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "100ml",
   "200ml"
  ],
  "sizePrices": {
   "100ml": {
    "price": 120,
    "oldPrice": 150
   },
   "200ml": {
    "price": 180,
    "oldPrice": 230
   }
  },
  "description": "Perfume masculino Animale — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 191,
  "reviewsList": [
   {
    "name": "Igor B.",
    "city": "São Paulo, SP",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Original e maravilhoso",
    "text": "Comprei o Animale e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Diego R.",
    "city": "Fortaleza, CE",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Já é meu favorito",
    "text": "Comprei o Animale e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Vinícius O.",
    "city": "Natal, RN",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Chegou perfeito",
    "text": "Comprei o Animale e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Júlio M.",
    "city": "Curitiba, PR",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Apaixonado pela fragrância",
    "text": "Comprei o Animale e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Lucas L.",
    "city": "Florianópolis, SC",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Fixação absurda",
    "text": "Comprei o Animale e amei. Chegou lacrado, frasco original e o cheiro é idêntico ao da loja física. Fixação ótima, durou o dia todo.",
    "verified": true
   },
   {
    "name": "Rodrigo V.",
    "city": "Maceió, AL",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Aprovado",
    "text": "Comprei o Animale e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   },
   {
    "name": "Eduardo P.",
    "city": "Recife, PE",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Aprovado",
    "text": "Bom perfume, Animale tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "38",
  "slug": "the-golden-secret-masculino-eau-de-toilette",
  "name": "The Golden Secret Masculino Eau de Toilette",
  "category": "promocao",
  "btu": 100,
  "price": 150,
  "oldPrice": 190,
  "installments": 10,
  "installmentValue": 14.9,
  "image": "/assets/p38-ByvaFnj_.webp",
  "gallery": [
   "/assets/p38-ByvaFnj_.webp",
   "/assets/p38-ByvaFnj_.webp",
   "/assets/p38-ByvaFnj_.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "100ml"
  ],
  "sizePrices": {
   "100ml": {
    "price": 150,
    "oldPrice": 190
   }
  },
  "description": "Perfume masculino Importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 194,
  "reviewsList": [
   {
    "name": "Bruno F.",
    "city": "Vitória, ES",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Sensacional!",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O The Golden Secret virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Pedro S.",
    "city": "Belo Horizonte, MG",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Cheiro incrível",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O The Golden Secret virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Mateus B.",
    "city": "Goiânia, GO",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Melhor compra do mês",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O The Golden Secret virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Davi R.",
    "city": "Cuiabá, MT",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Fragrância impecável",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O The Golden Secret virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Gustavo O.",
    "city": "Salvador, BA",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Vale cada centavo",
    "text": "Fragrância marcante, perfeita para o dia a dia e também à noite. O The Golden Secret virou meu signature. Recomendo demais.",
    "verified": true
   },
   {
    "name": "Henrique M.",
    "city": "Manaus, AM",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Recomendo",
    "text": "Bom perfume, The Golden Secret tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   },
   {
    "name": "Fábio L.",
    "city": "Rio de Janeiro, RJ",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Recomendo",
    "text": "The Golden Secret chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "39",
  "slug": "black-xs-masculino-eau-de-toilette",
  "name": "Black XS Masculino Eau de Toilette",
  "category": "importado",
  "btu": 100,
  "price": 370,
  "oldPrice": 470,
  "installments": 10,
  "installmentValue": 36.9,
  "image": "/assets/p39-CymC7TE0.webp",
  "gallery": [
   "/assets/p39-CymC7TE0.webp",
   "/assets/p39-CymC7TE0.webp",
   "/assets/p39-CymC7TE0.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "50ml",
   "100ml"
  ],
  "sizePrices": {
   "50ml": {
    "price": 320,
    "oldPrice": 410
   },
   "100ml": {
    "price": 370,
    "oldPrice": 470
   }
  },
  "description": "Perfume masculino Importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 197,
  "reviewsList": [
   {
    "name": "André G.",
    "city": "Brasília, DF",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Já é meu favorito",
    "text": "Para quem ama Black XS, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Daniel T.",
    "city": "João Pessoa, PB",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Chegou perfeito",
    "text": "Para quem ama Black XS, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Alex F.",
    "city": "Porto Alegre, RS",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Apaixonado pela fragrância",
    "text": "Para quem ama Black XS, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Thiago S.",
    "city": "Campinas, SP",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Fixação absurda",
    "text": "Para quem ama Black XS, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Leandro B.",
    "city": "São Paulo, SP",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Surpreendeu demais",
    "text": "Para quem ama Black XS, recomendo de olhos fechados. Original, lacrado e com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Renato R.",
    "city": "Fortaleza, CE",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Cheiro gostoso",
    "text": "Black XS chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   },
   {
    "name": "Rafael O.",
    "city": "Natal, RN",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Cheiro gostoso",
    "text": "Comprei o Black XS e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "40",
  "slug": "yves-saint-laurent-y-intense-perfume-masculino-eau-de-parfum",
  "name": "Yves Saint Laurent Y Intense Perfume Masculino Eau de Parfum",
  "category": "premium",
  "btu": 100,
  "price": 730,
  "oldPrice": 940,
  "installments": 10,
  "installmentValue": 72.9,
  "image": "/assets/p40-C8KJrIQm.webp",
  "gallery": [
   "/assets/p40-C8KJrIQm.webp",
   "/assets/p40-C8KJrIQm.webp",
   "/assets/p40-C8KJrIQm.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#0a0a0a"
   }
  ],
  "sizes": [
   "60ml",
   "100ml"
  ],
  "sizePrices": {
   "60ml": {
    "price": 570,
    "oldPrice": 730
   },
   "100ml": {
    "price": 730,
    "oldPrice": 940
   }
  },
  "description": "Perfume masculino Yves Saint Laurent — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.9,
  "reviews": 200,
  "bestseller": true,
  "reviewsList": [
   {
    "name": "Caio N.",
    "city": "Curitiba, PR",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Cheiro incrível",
    "text": "Já conhecia o Yves Saint Laurent Y Intense e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Igor A.",
    "city": "Florianópolis, SC",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Melhor compra do mês",
    "text": "Já conhecia o Yves Saint Laurent Y Intense e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Diego G.",
    "city": "Maceió, AL",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Fragrância impecável",
    "text": "Já conhecia o Yves Saint Laurent Y Intense e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Vinícius T.",
    "city": "Recife, PE",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Vale cada centavo",
    "text": "Já conhecia o Yves Saint Laurent Y Intense e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Júlio F.",
    "city": "Vitória, ES",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Original e maravilhoso",
    "text": "Já conhecia o Yves Saint Laurent Y Intense e sempre comprava em loja física pagando o dobro. Aqui veio idêntico, lacrado e por um preço justo.",
    "verified": true
   },
   {
    "name": "Lucas S.",
    "city": "Belo Horizonte, MG",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Gostei bastante",
    "text": "Comprei o Yves Saint Laurent Y Intense e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   },
   {
    "name": "Rodrigo B.",
    "city": "Goiânia, GO",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Gostei bastante",
    "text": "Bom perfume, Yves Saint Laurent Y Intense tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   }
  ],
  "gender": "masculino"
 },
 {
  "id": "49",
  "slug": "lady-million-feminino-eau-de-parfum",
  "gender": "feminino",
  "name": "Lady Million Feminino Eau de Parfum",
  "category": "importado",
  "btu": 100,
  "price": 630,
  "oldPrice": 810,
  "installments": 10,
  "installmentValue": 62.9,
  "image": "/assets/lady-million-feminino-eau-de-parfum-4011417-DWjyK5Qj.webp",
  "gallery": [
   "/assets/lady-million-feminino-eau-de-parfum-4011417-DWjyK5Qj.webp",
   "/assets/lady-million-feminino-eau-de-parfum-4011417-DWjyK5Qj.webp",
   "/assets/lady-million-feminino-eau-de-parfum-4011417-DWjyK5Qj.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "30ml",
   "50ml",
   "80ml"
  ],
  "sizePrices": {
   "30ml": {
    "price": 360,
    "oldPrice": 460
   },
   "50ml": {
    "price": 490,
    "oldPrice": 630
   },
   "80ml": {
    "price": 630,
    "oldPrice": 810
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 60,
  "bestseller": true,
  "reviewsList": [
   {
    "name": "Luiza P.",
    "city": "Manaus, AM",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Sensacional!",
    "text": "O Lady Million é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Camila D.",
    "city": "Rio de Janeiro, RJ",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Cheiro incrível",
    "text": "O Lady Million é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Larissa C.",
    "city": "Brasília, DF",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Melhor compra do mês",
    "text": "O Lady Million é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Isabela N.",
    "city": "João Pessoa, PB",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Fragrância impecável",
    "text": "O Lady Million é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Sofia A.",
    "city": "Porto Alegre, RS",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Vale cada centavo",
    "text": "O Lady Million é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Letícia G.",
    "city": "Campinas, SP",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Muito bom",
    "text": "Comprei o Lady Million e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   },
   {
    "name": "Aline T.",
    "city": "São Paulo, SP",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Muito bom",
    "text": "Bom perfume, Lady Million tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   }
  ]
 },
 {
  "id": "50",
  "slug": "olympea-feminino-eau-de-parfum",
  "gender": "feminino",
  "name": "Olympéa Feminino Eau de Parfum",
  "category": "importado",
  "btu": 100,
  "price": 540,
  "oldPrice": 690,
  "installments": 10,
  "installmentValue": 53.9,
  "image": "/assets/olympea-feminino-eau-de-parfum-4114536-3mc3KcuD.webp",
  "gallery": [
   "/assets/olympea-feminino-eau-de-parfum-4114536-3mc3KcuD.webp",
   "/assets/olympea-feminino-eau-de-parfum-4114536-3mc3KcuD.webp",
   "/assets/olympea-feminino-eau-de-parfum-4114536-3mc3KcuD.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "30ml",
   "50ml",
   "80ml"
  ],
  "sizePrices": {
   "30ml": {
    "price": 340,
    "oldPrice": 440
   },
   "50ml": {
    "price": 420,
    "oldPrice": 540
   },
   "80ml": {
    "price": 540,
    "oldPrice": 690
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 63,
  "bestseller": true,
  "reviewsList": [
   {
    "name": "Marina L.",
    "city": "Fortaleza, CE",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Já é meu favorito",
    "text": "Embalagem perfeita, frasco lindo, projeção ótima. O Olympéa é simplesmente encantador. Já é o segundo que peço.",
    "verified": true
   },
   {
    "name": "Patrícia V.",
    "city": "Natal, RN",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Chegou perfeito",
    "text": "Embalagem perfeita, frasco lindo, projeção ótima. O Olympéa é simplesmente encantador. Já é o segundo que peço.",
    "verified": true
   },
   {
    "name": "Priscila P.",
    "city": "Curitiba, PR",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Apaixonado pela fragrância",
    "text": "Embalagem perfeita, frasco lindo, projeção ótima. O Olympéa é simplesmente encantador. Já é o segundo que peço.",
    "verified": true
   },
   {
    "name": "Daniela D.",
    "city": "Florianópolis, SC",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Fixação absurda",
    "text": "Embalagem perfeita, frasco lindo, projeção ótima. O Olympéa é simplesmente encantador. Já é o segundo que peço.",
    "verified": true
   },
   {
    "name": "Beatriz C.",
    "city": "Maceió, AL",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Surpreendeu demais",
    "text": "Embalagem perfeita, frasco lindo, projeção ótima. O Olympéa é simplesmente encantador. Já é o segundo que peço.",
    "verified": true
   },
   {
    "name": "Bruna N.",
    "city": "Recife, PE",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Atendeu as expectativas",
    "text": "Bom perfume, Olympéa tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   },
   {
    "name": "Gabriela A.",
    "city": "Vitória, ES",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Atendeu as expectativas",
    "text": "Olympéa chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   }
  ]
 },
 {
  "id": "51",
  "slug": "la-vie-est-belle-feminino-l-eau-de-parfum",
  "gender": "feminino",
  "name": "La Vie Est Belle Feminino L'Eau de Parfum",
  "category": "importado",
  "btu": 100,
  "price": 860,
  "oldPrice": 1100,
  "installments": 10,
  "installmentValue": 85.9,
  "image": "/assets/la-vie-est-belle-feminino-leau-de-parfum-2399535-DcmoLxJg.webp",
  "gallery": [
   "/assets/la-vie-est-belle-feminino-leau-de-parfum-2399535-DcmoLxJg.webp",
   "/assets/la-vie-est-belle-feminino-leau-de-parfum-2399535-DcmoLxJg.webp",
   "/assets/la-vie-est-belle-feminino-leau-de-parfum-2399535-DcmoLxJg.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "30ml",
   "50ml",
   "100ml"
  ],
  "sizePrices": {
   "30ml": {
    "price": 470,
    "oldPrice": 600
   },
   "50ml": {
    "price": 670,
    "oldPrice": 860
   },
   "100ml": {
    "price": 860,
    "oldPrice": 1100
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 66,
  "bestseller": true,
  "reviewsList": [
   {
    "name": "Fernanda O.",
    "city": "Belo Horizonte, MG",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Cheiro incrível",
    "text": "Comprei o La Vie Est Belle e me apaixonei. Chegou lacrado, frasco original e o cheiro é idêntico ao da perfumaria. Fixou o dia todo.",
    "verified": true
   },
   {
    "name": "Vanessa M.",
    "city": "Goiânia, GO",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Melhor compra do mês",
    "text": "Comprei o La Vie Est Belle e me apaixonei. Chegou lacrado, frasco original e o cheiro é idêntico ao da perfumaria. Fixou o dia todo.",
    "verified": true
   },
   {
    "name": "Tatiane L.",
    "city": "Cuiabá, MT",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Fragrância impecável",
    "text": "Comprei o La Vie Est Belle e me apaixonei. Chegou lacrado, frasco original e o cheiro é idêntico ao da perfumaria. Fixou o dia todo.",
    "verified": true
   },
   {
    "name": "Juliana V.",
    "city": "Salvador, BA",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Vale cada centavo",
    "text": "Comprei o La Vie Est Belle e me apaixonei. Chegou lacrado, frasco original e o cheiro é idêntico ao da perfumaria. Fixou o dia todo.",
    "verified": true
   },
   {
    "name": "Carolina P.",
    "city": "Manaus, AM",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Original e maravilhoso",
    "text": "Comprei o La Vie Est Belle e me apaixonei. Chegou lacrado, frasco original e o cheiro é idêntico ao da perfumaria. Fixou o dia todo.",
    "verified": true
   },
   {
    "name": "Mariana D.",
    "city": "Rio de Janeiro, RJ",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Aprovado",
    "text": "La Vie Est Belle chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   },
   {
    "name": "Helena C.",
    "city": "Brasília, DF",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Aprovado",
    "text": "Comprei o La Vie Est Belle e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   }
  ]
 },
 {
  "id": "52",
  "slug": "jean-paul-gaultier-scandal-feminino-eau-de-parfum",
  "gender": "feminino",
  "name": "Jean Paul Gaultier Scandal Feminino Eau de Parfum",
  "category": "importado",
  "btu": 100,
  "price": 590,
  "oldPrice": 760,
  "installments": 10,
  "installmentValue": 58.9,
  "image": "/assets/jean-paul-gaultier-scandal-feminino-eau-de-parfum-9593048-DvkoOyC-.webp",
  "gallery": [
   "/assets/jean-paul-gaultier-scandal-feminino-eau-de-parfum-9593048-DvkoOyC-.webp",
   "/assets/jean-paul-gaultier-scandal-feminino-eau-de-parfum-9593048-DvkoOyC-.webp",
   "/assets/jean-paul-gaultier-scandal-feminino-eau-de-parfum-9593048-DvkoOyC-.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "30ml",
   "50ml",
   "80ml"
  ],
  "sizePrices": {
   "30ml": {
    "price": 340,
    "oldPrice": 440
   },
   "50ml": {
    "price": 460,
    "oldPrice": 590
   },
   "80ml": {
    "price": 590,
    "oldPrice": 760
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 69,
  "bestseller": true,
  "reviewsList": [
   {
    "name": "Renata B.",
    "city": "João Pessoa, PB",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Chegou perfeito",
    "text": "Fragrância delicada e marcante ao mesmo tempo. O Jean Paul Gaultier Scandal virou meu perfume diário. Recomendo demais!",
    "verified": true
   },
   {
    "name": "Luiza R.",
    "city": "Porto Alegre, RS",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Apaixonado pela fragrância",
    "text": "Fragrância delicada e marcante ao mesmo tempo. O Jean Paul Gaultier Scandal virou meu perfume diário. Recomendo demais!",
    "verified": true
   },
   {
    "name": "Camila O.",
    "city": "Campinas, SP",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Fixação absurda",
    "text": "Fragrância delicada e marcante ao mesmo tempo. O Jean Paul Gaultier Scandal virou meu perfume diário. Recomendo demais!",
    "verified": true
   },
   {
    "name": "Larissa M.",
    "city": "São Paulo, SP",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Surpreendeu demais",
    "text": "Fragrância delicada e marcante ao mesmo tempo. O Jean Paul Gaultier Scandal virou meu perfume diário. Recomendo demais!",
    "verified": true
   },
   {
    "name": "Isabela L.",
    "city": "Fortaleza, CE",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Sensacional!",
    "text": "Fragrância delicada e marcante ao mesmo tempo. O Jean Paul Gaultier Scandal virou meu perfume diário. Recomendo demais!",
    "verified": true
   },
   {
    "name": "Sofia V.",
    "city": "Natal, RN",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Recomendo",
    "text": "Comprei o Jean Paul Gaultier Scandal e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   },
   {
    "name": "Letícia P.",
    "city": "Curitiba, PR",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Recomendo",
    "text": "Bom perfume, Jean Paul Gaultier Scandal tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   }
  ]
 },
 {
  "id": "53",
  "slug": "good-girl-feminino-eau-de-parfum",
  "gender": "feminino",
  "name": "Good Girl Feminino Eau de Parfum",
  "category": "importado",
  "btu": 100,
  "price": 580,
  "oldPrice": 740,
  "installments": 10,
  "installmentValue": 57.9,
  "image": "/assets/good-girl-blush-polka-paradise-carolina-herrera-perfume-feminino-eau-de-parfum-1899997-CXCRZnny.webp",
  "gallery": [
   "/assets/good-girl-blush-polka-paradise-carolina-herrera-perfume-feminino-eau-de-parfum-1899997-CXCRZnny.webp",
   "/assets/good-girl-blush-polka-paradise-carolina-herrera-perfume-feminino-eau-de-parfum-1899997-CXCRZnny.webp",
   "/assets/good-girl-blush-polka-paradise-carolina-herrera-perfume-feminino-eau-de-parfum-1899997-CXCRZnny.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "30ml",
   "50ml",
   "80ml"
  ],
  "sizePrices": {
   "30ml": {
    "price": 350,
    "oldPrice": 450
   },
   "50ml": {
    "price": 450,
    "oldPrice": 580
   },
   "80ml": {
    "price": 580,
    "oldPrice": 740
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 72,
  "bestseller": true,
  "reviewsList": [
   {
    "name": "Natália F.",
    "city": "Florianópolis, SC",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Melhor compra do mês",
    "text": "Para quem ama Good Girl, comprem aqui sem medo. Original, lacrado, com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Marina S.",
    "city": "Maceió, AL",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Fragrância impecável",
    "text": "Para quem ama Good Girl, comprem aqui sem medo. Original, lacrado, com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Patrícia B.",
    "city": "Recife, PE",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Vale cada centavo",
    "text": "Para quem ama Good Girl, comprem aqui sem medo. Original, lacrado, com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Priscila R.",
    "city": "Vitória, ES",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Original e maravilhoso",
    "text": "Para quem ama Good Girl, comprem aqui sem medo. Original, lacrado, com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Daniela O.",
    "city": "Belo Horizonte, MG",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Já é meu favorito",
    "text": "Para quem ama Good Girl, comprem aqui sem medo. Original, lacrado, com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Beatriz M.",
    "city": "Goiânia, GO",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Cheiro gostoso",
    "text": "Bom perfume, Good Girl tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   },
   {
    "name": "Bruna L.",
    "city": "Cuiabá, MT",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Cheiro gostoso",
    "text": "Good Girl chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   }
  ]
 },
 {
  "id": "54",
  "slug": "libre-yves-saint-laurent-perfume-feminino-eau-de-toilette",
  "gender": "feminino",
  "name": "Libre Yves Saint Laurent Perfume Feminino Eau de Toilette",
  "category": "importado",
  "btu": 100,
  "price": 590,
  "oldPrice": 760,
  "installments": 10,
  "installmentValue": 58.9,
  "image": "/assets/libre-yves-saint-laurent-perfume-feminino-eau-de-toilette-4697116-BYOmnuPt.webp",
  "gallery": [
   "/assets/libre-yves-saint-laurent-perfume-feminino-eau-de-toilette-4697116-BYOmnuPt.webp",
   "/assets/libre-yves-saint-laurent-perfume-feminino-eau-de-toilette-4697116-BYOmnuPt.webp",
   "/assets/libre-yves-saint-laurent-perfume-feminino-eau-de-toilette-4697116-BYOmnuPt.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "30ml",
   "50ml",
   "90ml"
  ],
  "sizePrices": {
   "30ml": {
    "price": 350,
    "oldPrice": 450
   },
   "50ml": {
    "price": 460,
    "oldPrice": 590
   },
   "90ml": {
    "price": 590,
    "oldPrice": 760
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 75,
  "bestseller": true,
  "reviewsList": [
   {
    "name": "Clara G.",
    "city": "Salvador, BA",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Apaixonado pela fragrância",
    "text": "Sempre quis o Libre Yves Saint Laurent e finalmente comprei. Veio original, lacrado e por um preço muito melhor que em shopping.",
    "verified": true
   },
   {
    "name": "Fernanda T.",
    "city": "Manaus, AM",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Fixação absurda",
    "text": "Sempre quis o Libre Yves Saint Laurent e finalmente comprei. Veio original, lacrado e por um preço muito melhor que em shopping.",
    "verified": true
   },
   {
    "name": "Vanessa F.",
    "city": "Rio de Janeiro, RJ",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Surpreendeu demais",
    "text": "Sempre quis o Libre Yves Saint Laurent e finalmente comprei. Veio original, lacrado e por um preço muito melhor que em shopping.",
    "verified": true
   },
   {
    "name": "Tatiane S.",
    "city": "Brasília, DF",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Sensacional!",
    "text": "Sempre quis o Libre Yves Saint Laurent e finalmente comprei. Veio original, lacrado e por um preço muito melhor que em shopping.",
    "verified": true
   },
   {
    "name": "Juliana B.",
    "city": "João Pessoa, PB",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Cheiro incrível",
    "text": "Sempre quis o Libre Yves Saint Laurent e finalmente comprei. Veio original, lacrado e por um preço muito melhor que em shopping.",
    "verified": true
   },
   {
    "name": "Carolina R.",
    "city": "Porto Alegre, RS",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Gostei bastante",
    "text": "Libre Yves Saint Laurent chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   },
   {
    "name": "Mariana O.",
    "city": "Campinas, SP",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Gostei bastante",
    "text": "Comprei o Libre Yves Saint Laurent e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   }
  ]
 },
 {
  "id": "55",
  "slug": "212-vip-rose-feminino-eau-de-parfum",
  "gender": "feminino",
  "name": "212 Vip Rosé Feminino Eau de Parfum",
  "category": "importado",
  "btu": 100,
  "price": 700,
  "oldPrice": 900,
  "installments": 10,
  "installmentValue": 69.9,
  "image": "/assets/212-vip-rose-feminino-eau-de-parfum-8402619-eNFKoc6x.webp",
  "gallery": [
   "/assets/212-vip-rose-feminino-eau-de-parfum-8402619-eNFKoc6x.webp",
   "/assets/212-vip-rose-feminino-eau-de-parfum-8402619-eNFKoc6x.webp",
   "/assets/212-vip-rose-feminino-eau-de-parfum-8402619-eNFKoc6x.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "80ml",
   "125ml"
  ],
  "sizePrices": {
   "80ml": {
    "price": 550,
    "oldPrice": 700
   },
   "125ml": {
    "price": 700,
    "oldPrice": 900
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 78,
  "reviewsList": [
   {
    "name": "Amanda N.",
    "city": "São Paulo, SP",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Fragrância impecável",
    "text": "212 Vip Rosé é amor à primeira borrifada. Doce na medida, elegante e duradouro. Vale cada centavo.",
    "verified": true
   },
   {
    "name": "Renata A.",
    "city": "Fortaleza, CE",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Vale cada centavo",
    "text": "212 Vip Rosé é amor à primeira borrifada. Doce na medida, elegante e duradouro. Vale cada centavo.",
    "verified": true
   },
   {
    "name": "Luiza G.",
    "city": "Natal, RN",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Original e maravilhoso",
    "text": "212 Vip Rosé é amor à primeira borrifada. Doce na medida, elegante e duradouro. Vale cada centavo.",
    "verified": true
   },
   {
    "name": "Camila T.",
    "city": "Curitiba, PR",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Já é meu favorito",
    "text": "212 Vip Rosé é amor à primeira borrifada. Doce na medida, elegante e duradouro. Vale cada centavo.",
    "verified": true
   },
   {
    "name": "Larissa F.",
    "city": "Florianópolis, SC",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Chegou perfeito",
    "text": "212 Vip Rosé é amor à primeira borrifada. Doce na medida, elegante e duradouro. Vale cada centavo.",
    "verified": true
   },
   {
    "name": "Isabela S.",
    "city": "Maceió, AL",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Bom custo-benefício",
    "text": "Comprei o 212 Vip Rosé e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   },
   {
    "name": "Sofia B.",
    "city": "Recife, PE",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Bom custo-benefício",
    "text": "Bom perfume, 212 Vip Rosé tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   }
  ]
 },
 {
  "id": "56",
  "slug": "giorgio-armani-my-way-feminino-eau-de-parfum",
  "gender": "feminino",
  "name": "Giorgio Armani My Way Feminino Eau de Parfum",
  "category": "importado",
  "btu": 100,
  "price": 620,
  "oldPrice": 790,
  "installments": 10,
  "installmentValue": 61.9,
  "image": "/assets/giorgio-armani-my-way-feminino-eau-de-parfum-2759532-Qm8ezsaQ.webp",
  "gallery": [
   "/assets/giorgio-armani-my-way-feminino-eau-de-parfum-2759532-Qm8ezsaQ.webp",
   "/assets/giorgio-armani-my-way-feminino-eau-de-parfum-2759532-Qm8ezsaQ.webp",
   "/assets/giorgio-armani-my-way-feminino-eau-de-parfum-2759532-Qm8ezsaQ.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "30ml",
   "50ml",
   "90ml"
  ],
  "sizePrices": {
   "30ml": {
    "price": 370,
    "oldPrice": 470
   },
   "50ml": {
    "price": 490,
    "oldPrice": 630
   },
   "90ml": {
    "price": 620,
    "oldPrice": 790
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 81,
  "reviewsList": [
   {
    "name": "Aline D.",
    "city": "Vitória, ES",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Fixação absurda",
    "text": "O Giorgio Armani My Way é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Natália C.",
    "city": "Belo Horizonte, MG",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Surpreendeu demais",
    "text": "O Giorgio Armani My Way é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Marina N.",
    "city": "Goiânia, GO",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Sensacional!",
    "text": "O Giorgio Armani My Way é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Patrícia A.",
    "city": "Cuiabá, MT",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Cheiro incrível",
    "text": "O Giorgio Armani My Way é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Priscila G.",
    "city": "Salvador, BA",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Melhor compra do mês",
    "text": "O Giorgio Armani My Way é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Daniela T.",
    "city": "Manaus, AM",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Muito bom",
    "text": "Bom perfume, Giorgio Armani My Way tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   },
   {
    "name": "Beatriz F.",
    "city": "Rio de Janeiro, RJ",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Muito bom",
    "text": "Giorgio Armani My Way chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   }
  ]
 },
 {
  "id": "57",
  "slug": "212-feminino-eau-de-toilette",
  "gender": "feminino",
  "name": "212 Feminino Eau de Toilette",
  "category": "importado",
  "btu": 100,
  "price": 450,
  "oldPrice": 580,
  "installments": 10,
  "installmentValue": 44.9,
  "image": "/assets/212-feminino-eau-de-toilette-4844533-DVThDyH0.webp",
  "gallery": [
   "/assets/212-feminino-eau-de-toilette-4844533-DVThDyH0.webp",
   "/assets/212-feminino-eau-de-toilette-4844533-DVThDyH0.webp",
   "/assets/212-feminino-eau-de-toilette-4844533-DVThDyH0.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "30ml",
   "60ml",
   "100ml"
  ],
  "sizePrices": {
   "30ml": {
    "price": 280,
    "oldPrice": 360
   },
   "60ml": {
    "price": 350,
    "oldPrice": 450
   },
   "100ml": {
    "price": 450,
    "oldPrice": 580
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 84,
  "reviewsList": [
   {
    "name": "Gabriela V.",
    "city": "Brasília, DF",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Vale cada centavo",
    "text": "Embalagem perfeita, frasco lindo, projeção ótima. O 212 é simplesmente encantador. Já é o segundo que peço.",
    "verified": true
   },
   {
    "name": "Clara P.",
    "city": "João Pessoa, PB",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Original e maravilhoso",
    "text": "Embalagem perfeita, frasco lindo, projeção ótima. O 212 é simplesmente encantador. Já é o segundo que peço.",
    "verified": true
   },
   {
    "name": "Fernanda D.",
    "city": "Porto Alegre, RS",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Já é meu favorito",
    "text": "Embalagem perfeita, frasco lindo, projeção ótima. O 212 é simplesmente encantador. Já é o segundo que peço.",
    "verified": true
   },
   {
    "name": "Vanessa C.",
    "city": "Campinas, SP",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Chegou perfeito",
    "text": "Embalagem perfeita, frasco lindo, projeção ótima. O 212 é simplesmente encantador. Já é o segundo que peço.",
    "verified": true
   },
   {
    "name": "Tatiane N.",
    "city": "São Paulo, SP",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Apaixonado pela fragrância",
    "text": "Embalagem perfeita, frasco lindo, projeção ótima. O 212 é simplesmente encantador. Já é o segundo que peço.",
    "verified": true
   },
   {
    "name": "Juliana A.",
    "city": "Fortaleza, CE",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Atendeu as expectativas",
    "text": "212 chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   },
   {
    "name": "Carolina G.",
    "city": "Natal, RN",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Atendeu as expectativas",
    "text": "Comprei o 212 e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   }
  ]
 },
 {
  "id": "58",
  "slug": "ch-feminino-eau-de-toilette",
  "gender": "feminino",
  "name": "CH Feminino Eau de Toilette",
  "category": "importado",
  "btu": 100,
  "price": 550,
  "oldPrice": 700,
  "installments": 10,
  "installmentValue": 54.9,
  "image": "/assets/212-feminino-eau-de-toilette-4844533-DVThDyH0.webp",
  "gallery": [
   "/assets/212-feminino-eau-de-toilette-4844533-DVThDyH0.webp",
   "/assets/212-feminino-eau-de-toilette-4844533-DVThDyH0.webp",
   "/assets/212-feminino-eau-de-toilette-4844533-DVThDyH0.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "50ml",
   "80ml",
   "100ml"
  ],
  "sizePrices": {
   "50ml": {
    "price": 370,
    "oldPrice": 470
   },
   "80ml": {
    "price": 470,
    "oldPrice": 600
   },
   "100ml": {
    "price": 550,
    "oldPrice": 700
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 87,
  "reviewsList": [
   {
    "name": "Helena M.",
    "city": "Curitiba, PR",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Surpreendeu demais",
    "text": "Comprei o CH e me apaixonei. Chegou lacrado, frasco original e o cheiro é idêntico ao da perfumaria. Fixou o dia todo.",
    "verified": true
   },
   {
    "name": "Amanda L.",
    "city": "Florianópolis, SC",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Sensacional!",
    "text": "Comprei o CH e me apaixonei. Chegou lacrado, frasco original e o cheiro é idêntico ao da perfumaria. Fixou o dia todo.",
    "verified": true
   },
   {
    "name": "Renata V.",
    "city": "Maceió, AL",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Cheiro incrível",
    "text": "Comprei o CH e me apaixonei. Chegou lacrado, frasco original e o cheiro é idêntico ao da perfumaria. Fixou o dia todo.",
    "verified": true
   },
   {
    "name": "Luiza P.",
    "city": "Recife, PE",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Melhor compra do mês",
    "text": "Comprei o CH e me apaixonei. Chegou lacrado, frasco original e o cheiro é idêntico ao da perfumaria. Fixou o dia todo.",
    "verified": true
   },
   {
    "name": "Camila D.",
    "city": "Vitória, ES",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Fragrância impecável",
    "text": "Comprei o CH e me apaixonei. Chegou lacrado, frasco original e o cheiro é idêntico ao da perfumaria. Fixou o dia todo.",
    "verified": true
   },
   {
    "name": "Larissa C.",
    "city": "Belo Horizonte, MG",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Aprovado",
    "text": "Comprei o CH e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   },
   {
    "name": "Isabela N.",
    "city": "Goiânia, GO",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Aprovado",
    "text": "Bom perfume, CH tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   }
  ]
 },
 {
  "id": "59",
  "slug": "manasik-lilac-eau-de-parfum-perfume-feminino",
  "gender": "feminino",
  "name": "Manasik Lilac Eau de Parfum Perfume Feminino",
  "category": "importado",
  "btu": 100,
  "price": 70,
  "oldPrice": 90,
  "installments": 10,
  "installmentValue": 7.2,
  "image": "/assets/manasik-lilac-eau-de-parfum-perfume-feminino-1502317-BoNTplxT.webp",
  "gallery": [
   "/assets/manasik-lilac-eau-de-parfum-perfume-feminino-1502317-BoNTplxT.webp",
   "/assets/manasik-lilac-eau-de-parfum-perfume-feminino-1502317-BoNTplxT.webp",
   "/assets/manasik-lilac-eau-de-parfum-perfume-feminino-1502317-BoNTplxT.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "100ml"
  ],
  "sizePrices": {
   "100ml": {
    "price": 70,
    "oldPrice": 90
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 90,
  "reviewsList": [
   {
    "name": "Letícia R.",
    "city": "Cuiabá, MT",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Original e maravilhoso",
    "text": "Fragrância delicada e marcante ao mesmo tempo. O Manasik Lilac virou meu perfume diário. Recomendo demais!",
    "verified": true
   },
   {
    "name": "Aline O.",
    "city": "Salvador, BA",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Já é meu favorito",
    "text": "Fragrância delicada e marcante ao mesmo tempo. O Manasik Lilac virou meu perfume diário. Recomendo demais!",
    "verified": true
   },
   {
    "name": "Natália M.",
    "city": "Manaus, AM",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Chegou perfeito",
    "text": "Fragrância delicada e marcante ao mesmo tempo. O Manasik Lilac virou meu perfume diário. Recomendo demais!",
    "verified": true
   },
   {
    "name": "Marina L.",
    "city": "Rio de Janeiro, RJ",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Apaixonado pela fragrância",
    "text": "Fragrância delicada e marcante ao mesmo tempo. O Manasik Lilac virou meu perfume diário. Recomendo demais!",
    "verified": true
   },
   {
    "name": "Patrícia V.",
    "city": "Brasília, DF",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Fixação absurda",
    "text": "Fragrância delicada e marcante ao mesmo tempo. O Manasik Lilac virou meu perfume diário. Recomendo demais!",
    "verified": true
   },
   {
    "name": "Priscila P.",
    "city": "João Pessoa, PB",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Recomendo",
    "text": "Bom perfume, Manasik Lilac tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   },
   {
    "name": "Daniela D.",
    "city": "Porto Alegre, RS",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Recomendo",
    "text": "Manasik Lilac chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   }
  ]
 },
 {
  "id": "60",
  "slug": "yves-saint-laurent-mon-paris-feminino-eau-de-parfum",
  "gender": "feminino",
  "name": "Yves Saint Laurent Mon Paris Feminino Eau de Parfum",
  "category": "importado",
  "btu": 100,
  "price": 620,
  "oldPrice": 790,
  "installments": 10,
  "installmentValue": 61.9,
  "image": "/assets/yves-saint-laurent-mon-paris-feminino-eau-de-parfum-3995770-DKZzxF9z.webp",
  "gallery": [
   "/assets/yves-saint-laurent-mon-paris-feminino-eau-de-parfum-3995770-DKZzxF9z.webp",
   "/assets/yves-saint-laurent-mon-paris-feminino-eau-de-parfum-3995770-DKZzxF9z.webp",
   "/assets/yves-saint-laurent-mon-paris-feminino-eau-de-parfum-3995770-DKZzxF9z.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "30ml",
   "50ml",
   "90ml"
  ],
  "sizePrices": {
   "30ml": {
    "price": 370,
    "oldPrice": 470
   },
   "50ml": {
    "price": 490,
    "oldPrice": 630
   },
   "90ml": {
    "price": 620,
    "oldPrice": 790
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 93,
  "reviewsList": [
   {
    "name": "Bruna S.",
    "city": "Campinas, SP",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Sensacional!",
    "text": "Para quem ama Yves Saint Laurent Mon Paris, comprem aqui sem medo. Original, lacrado, com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Gabriela B.",
    "city": "São Paulo, SP",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Cheiro incrível",
    "text": "Para quem ama Yves Saint Laurent Mon Paris, comprem aqui sem medo. Original, lacrado, com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Clara R.",
    "city": "Fortaleza, CE",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Melhor compra do mês",
    "text": "Para quem ama Yves Saint Laurent Mon Paris, comprem aqui sem medo. Original, lacrado, com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Fernanda O.",
    "city": "Natal, RN",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Fragrância impecável",
    "text": "Para quem ama Yves Saint Laurent Mon Paris, comprem aqui sem medo. Original, lacrado, com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Vanessa M.",
    "city": "Curitiba, PR",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Vale cada centavo",
    "text": "Para quem ama Yves Saint Laurent Mon Paris, comprem aqui sem medo. Original, lacrado, com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Tatiane L.",
    "city": "Florianópolis, SC",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Cheiro gostoso",
    "text": "Yves Saint Laurent Mon Paris chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   },
   {
    "name": "Juliana V.",
    "city": "Maceió, AL",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Cheiro gostoso",
    "text": "Comprei o Yves Saint Laurent Mon Paris e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   }
  ]
 },
 {
  "id": "61",
  "slug": "eudora-feminino-eau-de-parfum",
  "gender": "feminino",
  "name": "Eudora Feminino Eau de Parfum",
  "category": "importado",
  "btu": 100,
  "price": 120,
  "oldPrice": 150,
  "installments": 10,
  "installmentValue": 11.9,
  "image": "/assets/eudora-feminino-eau-de-parfum-6286758-4qv-gKDo.webp",
  "gallery": [
   "/assets/eudora-feminino-eau-de-parfum-6286758-4qv-gKDo.webp",
   "/assets/eudora-feminino-eau-de-parfum-6286758-4qv-gKDo.webp",
   "/assets/eudora-feminino-eau-de-parfum-6286758-4qv-gKDo.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "75ml"
  ],
  "sizePrices": {
   "75ml": {
    "price": 120,
    "oldPrice": 150
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 96,
  "reviewsList": [
   {
    "name": "Mariana T.",
    "city": "Recife, PE",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Já é meu favorito",
    "text": "Sempre quis o Eudora e finalmente comprei. Veio original, lacrado e por um preço muito melhor que em shopping.",
    "verified": true
   },
   {
    "name": "Helena F.",
    "city": "Vitória, ES",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Chegou perfeito",
    "text": "Sempre quis o Eudora e finalmente comprei. Veio original, lacrado e por um preço muito melhor que em shopping.",
    "verified": true
   },
   {
    "name": "Amanda S.",
    "city": "Belo Horizonte, MG",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Apaixonado pela fragrância",
    "text": "Sempre quis o Eudora e finalmente comprei. Veio original, lacrado e por um preço muito melhor que em shopping.",
    "verified": true
   },
   {
    "name": "Renata B.",
    "city": "Goiânia, GO",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Fixação absurda",
    "text": "Sempre quis o Eudora e finalmente comprei. Veio original, lacrado e por um preço muito melhor que em shopping.",
    "verified": true
   },
   {
    "name": "Luiza R.",
    "city": "Cuiabá, MT",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Surpreendeu demais",
    "text": "Sempre quis o Eudora e finalmente comprei. Veio original, lacrado e por um preço muito melhor que em shopping.",
    "verified": true
   },
   {
    "name": "Camila O.",
    "city": "Salvador, BA",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Gostei bastante",
    "text": "Comprei o Eudora e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   },
   {
    "name": "Larissa M.",
    "city": "Manaus, AM",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Gostei bastante",
    "text": "Bom perfume, Eudora tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   }
  ]
 },
 {
  "id": "62",
  "slug": "la-belle-le-parfum-jean-paul-gaultier-feminino-eau-de-parfum",
  "gender": "feminino",
  "name": "La Belle Le Parfum Jean Paul Gaultier Feminino Eau de Parfum",
  "category": "importado",
  "btu": 100,
  "price": 670,
  "oldPrice": 860,
  "installments": 10,
  "installmentValue": 66.9,
  "image": "/assets/la-belle-le-parfum-jean-paul-gaultier-feminino-eau-de-parfum-9319650-DiQr6NQV.webp",
  "gallery": [
   "/assets/la-belle-le-parfum-jean-paul-gaultier-feminino-eau-de-parfum-9319650-DiQr6NQV.webp",
   "/assets/la-belle-le-parfum-jean-paul-gaultier-feminino-eau-de-parfum-9319650-DiQr6NQV.webp",
   "/assets/la-belle-le-parfum-jean-paul-gaultier-feminino-eau-de-parfum-9319650-DiQr6NQV.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "30ml",
   "50ml",
   "100ml"
  ],
  "sizePrices": {
   "30ml": {
    "price": 420,
    "oldPrice": 540
   },
   "50ml": {
    "price": 520,
    "oldPrice": 660
   },
   "100ml": {
    "price": 670,
    "oldPrice": 860
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 99,
  "reviewsList": [
   {
    "name": "Sofia A.",
    "city": "Rio de Janeiro, RJ",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Cheiro incrível",
    "text": "La Belle Le Parfum Jean Paul Gaultier é amor à primeira borrifada. Doce na medida, elegante e duradouro. Vale cada centavo.",
    "verified": true
   },
   {
    "name": "Letícia G.",
    "city": "Brasília, DF",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Melhor compra do mês",
    "text": "La Belle Le Parfum Jean Paul Gaultier é amor à primeira borrifada. Doce na medida, elegante e duradouro. Vale cada centavo.",
    "verified": true
   },
   {
    "name": "Aline T.",
    "city": "João Pessoa, PB",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Fragrância impecável",
    "text": "La Belle Le Parfum Jean Paul Gaultier é amor à primeira borrifada. Doce na medida, elegante e duradouro. Vale cada centavo.",
    "verified": true
   },
   {
    "name": "Natália F.",
    "city": "Porto Alegre, RS",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Vale cada centavo",
    "text": "La Belle Le Parfum Jean Paul Gaultier é amor à primeira borrifada. Doce na medida, elegante e duradouro. Vale cada centavo.",
    "verified": true
   },
   {
    "name": "Marina S.",
    "city": "Campinas, SP",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Original e maravilhoso",
    "text": "La Belle Le Parfum Jean Paul Gaultier é amor à primeira borrifada. Doce na medida, elegante e duradouro. Vale cada centavo.",
    "verified": true
   },
   {
    "name": "Patrícia B.",
    "city": "São Paulo, SP",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Bom custo-benefício",
    "text": "Bom perfume, La Belle Le Parfum Jean Paul Gaultier tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   },
   {
    "name": "Priscila R.",
    "city": "Fortaleza, CE",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Bom custo-benefício",
    "text": "La Belle Le Parfum Jean Paul Gaultier chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   }
  ]
 },
 {
  "id": "63",
  "slug": "paco-rabanne-fame-feminino-eau-de-parfum",
  "gender": "feminino",
  "name": "Paco Rabanne Fame Feminino Eau de Parfum",
  "category": "importado",
  "btu": 100,
  "price": 540,
  "oldPrice": 690,
  "installments": 10,
  "installmentValue": 53.9,
  "image": "/assets/paco-rabanne-fame-feminino-eau-de-parfum-5811112-PTJZSmZN.webp",
  "gallery": [
   "/assets/paco-rabanne-fame-feminino-eau-de-parfum-5811112-PTJZSmZN.webp",
   "/assets/paco-rabanne-fame-feminino-eau-de-parfum-5811112-PTJZSmZN.webp",
   "/assets/paco-rabanne-fame-feminino-eau-de-parfum-5811112-PTJZSmZN.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "30ml",
   "50ml",
   "80ml"
  ],
  "sizePrices": {
   "30ml": {
    "price": 340,
    "oldPrice": 440
   },
   "50ml": {
    "price": 420,
    "oldPrice": 540
   },
   "80ml": {
    "price": 540,
    "oldPrice": 690
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 102,
  "reviewsList": [
   {
    "name": "Beatriz C.",
    "city": "Natal, RN",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Chegou perfeito",
    "text": "O Paco Rabanne Fame é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Bruna N.",
    "city": "Curitiba, PR",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Apaixonado pela fragrância",
    "text": "O Paco Rabanne Fame é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Gabriela A.",
    "city": "Florianópolis, SC",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Fixação absurda",
    "text": "O Paco Rabanne Fame é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Clara G.",
    "city": "Maceió, AL",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Surpreendeu demais",
    "text": "O Paco Rabanne Fame é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Fernanda T.",
    "city": "Recife, PE",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Sensacional!",
    "text": "O Paco Rabanne Fame é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Vanessa F.",
    "city": "Vitória, ES",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Muito bom",
    "text": "Paco Rabanne Fame chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   },
   {
    "name": "Tatiane S.",
    "city": "Belo Horizonte, MG",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Muito bom",
    "text": "Comprei o Paco Rabanne Fame e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   }
  ]
 },
 {
  "id": "64",
  "slug": "good-girl-very-good-carolina-herrera-perfume-feminino-eau-de-parfum",
  "gender": "feminino",
  "name": "Good Girl Very Good Carolina Herrera Perfume Feminino Eau de Parfum",
  "category": "importado",
  "btu": 100,
  "price": 600,
  "oldPrice": 770,
  "installments": 10,
  "installmentValue": 59.9,
  "image": "/assets/good-girl-very-good-carolina-herrera-perfume-feminino-eau-de-parfum-9162644-BuW28eJG.webp",
  "gallery": [
   "/assets/good-girl-very-good-carolina-herrera-perfume-feminino-eau-de-parfum-9162644-BuW28eJG.webp",
   "/assets/good-girl-very-good-carolina-herrera-perfume-feminino-eau-de-parfum-9162644-BuW28eJG.webp",
   "/assets/good-girl-very-good-carolina-herrera-perfume-feminino-eau-de-parfum-9162644-BuW28eJG.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "50ml",
   "80ml"
  ],
  "sizePrices": {
   "50ml": {
    "price": 470,
    "oldPrice": 600
   },
   "80ml": {
    "price": 600,
    "oldPrice": 770
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 105,
  "reviewsList": [
   {
    "name": "Carolina P.",
    "city": "Goiânia, GO",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Melhor compra do mês",
    "text": "Embalagem perfeita, frasco lindo, projeção ótima. O Good Girl Very Good Carolina Herrera é simplesmente encantador. Já é o segundo que peço.",
    "verified": true
   },
   {
    "name": "Mariana D.",
    "city": "Cuiabá, MT",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Fragrância impecável",
    "text": "Embalagem perfeita, frasco lindo, projeção ótima. O Good Girl Very Good Carolina Herrera é simplesmente encantador. Já é o segundo que peço.",
    "verified": true
   },
   {
    "name": "Helena C.",
    "city": "Salvador, BA",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Vale cada centavo",
    "text": "Embalagem perfeita, frasco lindo, projeção ótima. O Good Girl Very Good Carolina Herrera é simplesmente encantador. Já é o segundo que peço.",
    "verified": true
   },
   {
    "name": "Amanda N.",
    "city": "Manaus, AM",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Original e maravilhoso",
    "text": "Embalagem perfeita, frasco lindo, projeção ótima. O Good Girl Very Good Carolina Herrera é simplesmente encantador. Já é o segundo que peço.",
    "verified": true
   },
   {
    "name": "Renata A.",
    "city": "Rio de Janeiro, RJ",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Já é meu favorito",
    "text": "Embalagem perfeita, frasco lindo, projeção ótima. O Good Girl Very Good Carolina Herrera é simplesmente encantador. Já é o segundo que peço.",
    "verified": true
   },
   {
    "name": "Luiza G.",
    "city": "Brasília, DF",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Atendeu as expectativas",
    "text": "Comprei o Good Girl Very Good Carolina Herrera e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   },
   {
    "name": "Camila T.",
    "city": "João Pessoa, PB",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Atendeu as expectativas",
    "text": "Bom perfume, Good Girl Very Good Carolina Herrera tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   }
  ]
 },
 {
  "id": "65",
  "slug": "cute-woman-la-rive-feminino-eau-de-parfum-100ml",
  "gender": "feminino",
  "name": "Cuté Woman La Rive Feminino Eau de Parfum 100ml",
  "category": "importado",
  "btu": 100,
  "price": 60,
  "oldPrice": 80,
  "installments": 10,
  "installmentValue": 5.9,
  "image": "/assets/212-sexy-feminino-eau-de-parfum-4894882-E_0d0xd1.webp",
  "gallery": [
   "/assets/212-sexy-feminino-eau-de-parfum-4894882-E_0d0xd1.webp",
   "/assets/212-sexy-feminino-eau-de-parfum-4894882-E_0d0xd1.webp",
   "/assets/212-sexy-feminino-eau-de-parfum-4894882-E_0d0xd1.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "100ml"
  ],
  "sizePrices": {
   "100ml": {
    "price": 60,
    "oldPrice": 80
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 108,
  "reviewsList": [
   {
    "name": "Isabela L.",
    "city": "Porto Alegre, RS",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Apaixonado pela fragrância",
    "text": "Comprei o Cuté Woman La Rive e me apaixonei. Chegou lacrado, frasco original e o cheiro é idêntico ao da perfumaria. Fixou o dia todo.",
    "verified": true
   },
   {
    "name": "Sofia V.",
    "city": "Campinas, SP",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Fixação absurda",
    "text": "Comprei o Cuté Woman La Rive e me apaixonei. Chegou lacrado, frasco original e o cheiro é idêntico ao da perfumaria. Fixou o dia todo.",
    "verified": true
   },
   {
    "name": "Letícia P.",
    "city": "São Paulo, SP",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Surpreendeu demais",
    "text": "Comprei o Cuté Woman La Rive e me apaixonei. Chegou lacrado, frasco original e o cheiro é idêntico ao da perfumaria. Fixou o dia todo.",
    "verified": true
   },
   {
    "name": "Aline D.",
    "city": "Fortaleza, CE",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Sensacional!",
    "text": "Comprei o Cuté Woman La Rive e me apaixonei. Chegou lacrado, frasco original e o cheiro é idêntico ao da perfumaria. Fixou o dia todo.",
    "verified": true
   },
   {
    "name": "Natália C.",
    "city": "Natal, RN",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Cheiro incrível",
    "text": "Comprei o Cuté Woman La Rive e me apaixonei. Chegou lacrado, frasco original e o cheiro é idêntico ao da perfumaria. Fixou o dia todo.",
    "verified": true
   },
   {
    "name": "Marina N.",
    "city": "Curitiba, PR",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Aprovado",
    "text": "Bom perfume, Cuté Woman La Rive tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   },
   {
    "name": "Patrícia A.",
    "city": "Florianópolis, SC",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Aprovado",
    "text": "Cuté Woman La Rive chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   }
  ]
 },
 {
  "id": "66",
  "slug": "pure-xs-feminino-eau-de-parfum",
  "gender": "feminino",
  "name": "Pure XS Feminino Eau de Parfum",
  "category": "importado",
  "btu": 100,
  "price": 460,
  "oldPrice": 590,
  "installments": 10,
  "installmentValue": 45.9,
  "image": "/assets/pure-xs-feminino-eau-de-parfum-1959732-zTs-fes1.webp",
  "gallery": [
   "/assets/pure-xs-feminino-eau-de-parfum-1959732-zTs-fes1.webp",
   "/assets/pure-xs-feminino-eau-de-parfum-1959732-zTs-fes1.webp",
   "/assets/pure-xs-feminino-eau-de-parfum-1959732-zTs-fes1.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "50ml",
   "80ml"
  ],
  "sizePrices": {
   "50ml": {
    "price": 360,
    "oldPrice": 460
   },
   "80ml": {
    "price": 460,
    "oldPrice": 590
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 111,
  "reviewsList": [
   {
    "name": "Daniela O.",
    "city": "Maceió, AL",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Fragrância impecável",
    "text": "Fragrância delicada e marcante ao mesmo tempo. O Pure XS virou meu perfume diário. Recomendo demais!",
    "verified": true
   },
   {
    "name": "Beatriz M.",
    "city": "Recife, PE",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Vale cada centavo",
    "text": "Fragrância delicada e marcante ao mesmo tempo. O Pure XS virou meu perfume diário. Recomendo demais!",
    "verified": true
   },
   {
    "name": "Bruna L.",
    "city": "Vitória, ES",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Original e maravilhoso",
    "text": "Fragrância delicada e marcante ao mesmo tempo. O Pure XS virou meu perfume diário. Recomendo demais!",
    "verified": true
   },
   {
    "name": "Gabriela V.",
    "city": "Belo Horizonte, MG",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Já é meu favorito",
    "text": "Fragrância delicada e marcante ao mesmo tempo. O Pure XS virou meu perfume diário. Recomendo demais!",
    "verified": true
   },
   {
    "name": "Clara P.",
    "city": "Goiânia, GO",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Chegou perfeito",
    "text": "Fragrância delicada e marcante ao mesmo tempo. O Pure XS virou meu perfume diário. Recomendo demais!",
    "verified": true
   },
   {
    "name": "Fernanda D.",
    "city": "Cuiabá, MT",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Recomendo",
    "text": "Pure XS chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   },
   {
    "name": "Vanessa C.",
    "city": "Salvador, BA",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Recomendo",
    "text": "Comprei o Pure XS e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   }
  ]
 },
 {
  "id": "67",
  "slug": "moschino-i-love-feminino-toilette",
  "gender": "feminino",
  "name": "Moschino I Love Feminino Toilette",
  "category": "importado",
  "btu": 100,
  "price": 270,
  "oldPrice": 340,
  "installments": 10,
  "installmentValue": 26.9,
  "image": "/assets/moschino-i-love-feminino-toilette-5718594-DpnLzHEm.webp",
  "gallery": [
   "/assets/moschino-i-love-feminino-toilette-5718594-DpnLzHEm.webp",
   "/assets/moschino-i-love-feminino-toilette-5718594-DpnLzHEm.webp",
   "/assets/moschino-i-love-feminino-toilette-5718594-DpnLzHEm.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "30ml",
   "50ml",
   "100ml"
  ],
  "sizePrices": {
   "30ml": {
    "price": 160,
    "oldPrice": 200
   },
   "50ml": {
    "price": 210,
    "oldPrice": 270
   },
   "100ml": {
    "price": 270,
    "oldPrice": 340
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 114,
  "reviewsList": [
   {
    "name": "Juliana B.",
    "city": "Manaus, AM",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Fixação absurda",
    "text": "Para quem ama Moschino I Love, comprem aqui sem medo. Original, lacrado, com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Carolina R.",
    "city": "Rio de Janeiro, RJ",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Surpreendeu demais",
    "text": "Para quem ama Moschino I Love, comprem aqui sem medo. Original, lacrado, com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Mariana O.",
    "city": "Brasília, DF",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Sensacional!",
    "text": "Para quem ama Moschino I Love, comprem aqui sem medo. Original, lacrado, com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Helena M.",
    "city": "João Pessoa, PB",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Cheiro incrível",
    "text": "Para quem ama Moschino I Love, comprem aqui sem medo. Original, lacrado, com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Amanda L.",
    "city": "Porto Alegre, RS",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Melhor compra do mês",
    "text": "Para quem ama Moschino I Love, comprem aqui sem medo. Original, lacrado, com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Renata V.",
    "city": "Campinas, SP",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Cheiro gostoso",
    "text": "Comprei o Moschino I Love e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   },
   {
    "name": "Luiza P.",
    "city": "São Paulo, SP",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Cheiro gostoso",
    "text": "Bom perfume, Moschino I Love tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   }
  ]
 },
 {
  "id": "68",
  "slug": "armani-code-feminino-eau-de-parfum",
  "gender": "feminino",
  "name": "Armani Code Feminino Eau de Parfum",
  "category": "importado",
  "btu": 100,
  "price": 470,
  "oldPrice": 600,
  "installments": 10,
  "installmentValue": 46.9,
  "image": "/assets/armani-code-feminino-eau-de-parfum-1810594-C8k7fhPi.webp",
  "gallery": [
   "/assets/armani-code-feminino-eau-de-parfum-1810594-C8k7fhPi.webp",
   "/assets/armani-code-feminino-eau-de-parfum-1810594-C8k7fhPi.webp",
   "/assets/armani-code-feminino-eau-de-parfum-1810594-C8k7fhPi.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "30ml",
   "50ml",
   "75ml"
  ],
  "sizePrices": {
   "30ml": {
    "price": 300,
    "oldPrice": 380
   },
   "50ml": {
    "price": 360,
    "oldPrice": 460
   },
   "75ml": {
    "price": 470,
    "oldPrice": 600
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 117,
  "reviewsList": [
   {
    "name": "Larissa F.",
    "city": "Fortaleza, CE",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Vale cada centavo",
    "text": "Sempre quis o Armani Code e finalmente comprei. Veio original, lacrado e por um preço muito melhor que em shopping.",
    "verified": true
   },
   {
    "name": "Isabela S.",
    "city": "Natal, RN",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Original e maravilhoso",
    "text": "Sempre quis o Armani Code e finalmente comprei. Veio original, lacrado e por um preço muito melhor que em shopping.",
    "verified": true
   },
   {
    "name": "Sofia B.",
    "city": "Curitiba, PR",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Já é meu favorito",
    "text": "Sempre quis o Armani Code e finalmente comprei. Veio original, lacrado e por um preço muito melhor que em shopping.",
    "verified": true
   },
   {
    "name": "Letícia R.",
    "city": "Florianópolis, SC",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Chegou perfeito",
    "text": "Sempre quis o Armani Code e finalmente comprei. Veio original, lacrado e por um preço muito melhor que em shopping.",
    "verified": true
   },
   {
    "name": "Aline O.",
    "city": "Maceió, AL",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Apaixonado pela fragrância",
    "text": "Sempre quis o Armani Code e finalmente comprei. Veio original, lacrado e por um preço muito melhor que em shopping.",
    "verified": true
   },
   {
    "name": "Natália M.",
    "city": "Recife, PE",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Gostei bastante",
    "text": "Bom perfume, Armani Code tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   },
   {
    "name": "Marina L.",
    "city": "Vitória, ES",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Gostei bastante",
    "text": "Armani Code chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   }
  ]
 },
 {
  "id": "69",
  "slug": "coeur-frivole-feminino-eau-de-parfum",
  "gender": "feminino",
  "name": "Coeur Frivole Feminino Eau de Parfum",
  "category": "importado",
  "btu": 100,
  "price": 60,
  "oldPrice": 80,
  "installments": 10,
  "installmentValue": 5.9,
  "image": "/assets/coeur-frivole-feminino-eau-de-parfum-4997471-C40TM5ev.webp",
  "gallery": [
   "/assets/coeur-frivole-feminino-eau-de-parfum-4997471-C40TM5ev.webp",
   "/assets/coeur-frivole-feminino-eau-de-parfum-4997471-C40TM5ev.webp",
   "/assets/coeur-frivole-feminino-eau-de-parfum-4997471-C40TM5ev.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "100ml"
  ],
  "sizePrices": {
   "100ml": {
    "price": 60,
    "oldPrice": 80
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 120,
  "reviewsList": [
   {
    "name": "Priscila G.",
    "city": "Belo Horizonte, MG",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Surpreendeu demais",
    "text": "Coeur Frivole é amor à primeira borrifada. Doce na medida, elegante e duradouro. Vale cada centavo.",
    "verified": true
   },
   {
    "name": "Daniela T.",
    "city": "Goiânia, GO",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Sensacional!",
    "text": "Coeur Frivole é amor à primeira borrifada. Doce na medida, elegante e duradouro. Vale cada centavo.",
    "verified": true
   },
   {
    "name": "Beatriz F.",
    "city": "Cuiabá, MT",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Cheiro incrível",
    "text": "Coeur Frivole é amor à primeira borrifada. Doce na medida, elegante e duradouro. Vale cada centavo.",
    "verified": true
   },
   {
    "name": "Bruna S.",
    "city": "Salvador, BA",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Melhor compra do mês",
    "text": "Coeur Frivole é amor à primeira borrifada. Doce na medida, elegante e duradouro. Vale cada centavo.",
    "verified": true
   },
   {
    "name": "Gabriela B.",
    "city": "Manaus, AM",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Fragrância impecável",
    "text": "Coeur Frivole é amor à primeira borrifada. Doce na medida, elegante e duradouro. Vale cada centavo.",
    "verified": true
   },
   {
    "name": "Clara R.",
    "city": "Rio de Janeiro, RJ",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Bom custo-benefício",
    "text": "Coeur Frivole chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   },
   {
    "name": "Fernanda O.",
    "city": "Brasília, DF",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Bom custo-benefício",
    "text": "Comprei o Coeur Frivole e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   }
  ]
 },
 {
  "id": "70",
  "slug": "acqua-di-gioia-feminino-eau-de-parfum",
  "gender": "feminino",
  "name": "Acqua di Gioia Feminino Eau de Parfum",
  "category": "importado",
  "btu": 100,
  "price": 590,
  "oldPrice": 760,
  "installments": 10,
  "installmentValue": 58.9,
  "image": "/assets/acqua-di-gioia-feminino-eau-de-parfum-8802945-DBsm1uRc.webp",
  "gallery": [
   "/assets/acqua-di-gioia-feminino-eau-de-parfum-8802945-DBsm1uRc.webp",
   "/assets/acqua-di-gioia-feminino-eau-de-parfum-8802945-DBsm1uRc.webp",
   "/assets/acqua-di-gioia-feminino-eau-de-parfum-8802945-DBsm1uRc.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "30ml",
   "50ml",
   "100ml"
  ],
  "sizePrices": {
   "30ml": {
    "price": 370,
    "oldPrice": 470
   },
   "50ml": {
    "price": 460,
    "oldPrice": 590
   },
   "100ml": {
    "price": 590,
    "oldPrice": 760
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 123,
  "reviewsList": [
   {
    "name": "Tatiane N.",
    "city": "João Pessoa, PB",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Original e maravilhoso",
    "text": "O Acqua di Gioia é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Juliana A.",
    "city": "Porto Alegre, RS",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Já é meu favorito",
    "text": "O Acqua di Gioia é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Carolina G.",
    "city": "Campinas, SP",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Chegou perfeito",
    "text": "O Acqua di Gioia é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Mariana T.",
    "city": "São Paulo, SP",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Apaixonado pela fragrância",
    "text": "O Acqua di Gioia é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Helena F.",
    "city": "Fortaleza, CE",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Fixação absurda",
    "text": "O Acqua di Gioia é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Amanda S.",
    "city": "Natal, RN",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Muito bom",
    "text": "Comprei o Acqua di Gioia e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   },
   {
    "name": "Renata B.",
    "city": "Curitiba, PR",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Muito bom",
    "text": "Bom perfume, Acqua di Gioia tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   }
  ]
 },
 {
  "id": "71",
  "slug": "angel-refillable-feminino-eau-de-parfum",
  "gender": "feminino",
  "name": "Angel Refillable Feminino Eau de Parfum",
  "category": "importado",
  "btu": 100,
  "price": 860,
  "oldPrice": 1100,
  "installments": 10,
  "installmentValue": 85.9,
  "image": "/assets/angel-refillable-feminino-eau-de-parfum-8765627-8Ak4tIxN.webp",
  "gallery": [
   "/assets/angel-refillable-feminino-eau-de-parfum-8765627-8Ak4tIxN.webp",
   "/assets/angel-refillable-feminino-eau-de-parfum-8765627-8Ak4tIxN.webp",
   "/assets/angel-refillable-feminino-eau-de-parfum-8765627-8Ak4tIxN.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "25ml",
   "50ml",
   "100ml"
  ],
  "sizePrices": {
   "25ml": {
    "price": 470,
    "oldPrice": 600
   },
   "50ml": {
    "price": 670,
    "oldPrice": 860
   },
   "100ml": {
    "price": 860,
    "oldPrice": 1100
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 126,
  "reviewsList": [
   {
    "name": "Camila D.",
    "city": "Florianópolis, SC",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Sensacional!",
    "text": "Embalagem perfeita, frasco lindo, projeção ótima. O Angel Refillable é simplesmente encantador. Já é o segundo que peço.",
    "verified": true
   },
   {
    "name": "Larissa C.",
    "city": "Maceió, AL",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Cheiro incrível",
    "text": "Embalagem perfeita, frasco lindo, projeção ótima. O Angel Refillable é simplesmente encantador. Já é o segundo que peço.",
    "verified": true
   },
   {
    "name": "Isabela N.",
    "city": "Recife, PE",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Melhor compra do mês",
    "text": "Embalagem perfeita, frasco lindo, projeção ótima. O Angel Refillable é simplesmente encantador. Já é o segundo que peço.",
    "verified": true
   },
   {
    "name": "Sofia A.",
    "city": "Vitória, ES",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Fragrância impecável",
    "text": "Embalagem perfeita, frasco lindo, projeção ótima. O Angel Refillable é simplesmente encantador. Já é o segundo que peço.",
    "verified": true
   },
   {
    "name": "Letícia G.",
    "city": "Belo Horizonte, MG",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Vale cada centavo",
    "text": "Embalagem perfeita, frasco lindo, projeção ótima. O Angel Refillable é simplesmente encantador. Já é o segundo que peço.",
    "verified": true
   },
   {
    "name": "Aline T.",
    "city": "Goiânia, GO",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Atendeu as expectativas",
    "text": "Bom perfume, Angel Refillable tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   },
   {
    "name": "Natália F.",
    "city": "Cuiabá, MT",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Atendeu as expectativas",
    "text": "Angel Refillable chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   }
  ]
 },
 {
  "id": "72",
  "slug": "good-girl-blush-polka-paradise-carolina-herrera-perfume-feminino-eau-de-parfum",
  "gender": "feminino",
  "name": "Good Girl Blush Polka Paradise Carolina Herrera Perfume Feminino Eau de Parfum",
  "category": "importado",
  "btu": 100,
  "price": 480,
  "oldPrice": 610,
  "installments": 10,
  "installmentValue": 47.9,
  "image": "/assets/good-girl-blush-polka-paradise-carolina-herrera-perfume-feminino-eau-de-parfum-1899997-CXCRZnny.webp",
  "gallery": [
   "/assets/good-girl-blush-polka-paradise-carolina-herrera-perfume-feminino-eau-de-parfum-1899997-CXCRZnny.webp",
   "/assets/good-girl-blush-polka-paradise-carolina-herrera-perfume-feminino-eau-de-parfum-1899997-CXCRZnny.webp",
   "/assets/good-girl-blush-polka-paradise-carolina-herrera-perfume-feminino-eau-de-parfum-1899997-CXCRZnny.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "80ml"
  ],
  "sizePrices": {
   "80ml": {
    "price": 480,
    "oldPrice": 610
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 129,
  "reviewsList": [
   {
    "name": "Patrícia V.",
    "city": "Salvador, BA",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Já é meu favorito",
    "text": "Comprei o Good Girl Blush Polka Paradise Carolina Herrera e me apaixonei. Chegou lacrado, frasco original e o cheiro é idêntico ao da perfumaria. Fixou o dia todo.",
    "verified": true
   },
   {
    "name": "Priscila P.",
    "city": "Manaus, AM",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Chegou perfeito",
    "text": "Comprei o Good Girl Blush Polka Paradise Carolina Herrera e me apaixonei. Chegou lacrado, frasco original e o cheiro é idêntico ao da perfumaria. Fixou o dia todo.",
    "verified": true
   },
   {
    "name": "Daniela D.",
    "city": "Rio de Janeiro, RJ",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Apaixonado pela fragrância",
    "text": "Comprei o Good Girl Blush Polka Paradise Carolina Herrera e me apaixonei. Chegou lacrado, frasco original e o cheiro é idêntico ao da perfumaria. Fixou o dia todo.",
    "verified": true
   },
   {
    "name": "Beatriz C.",
    "city": "Brasília, DF",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Fixação absurda",
    "text": "Comprei o Good Girl Blush Polka Paradise Carolina Herrera e me apaixonei. Chegou lacrado, frasco original e o cheiro é idêntico ao da perfumaria. Fixou o dia todo.",
    "verified": true
   },
   {
    "name": "Bruna N.",
    "city": "João Pessoa, PB",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Surpreendeu demais",
    "text": "Comprei o Good Girl Blush Polka Paradise Carolina Herrera e me apaixonei. Chegou lacrado, frasco original e o cheiro é idêntico ao da perfumaria. Fixou o dia todo.",
    "verified": true
   },
   {
    "name": "Gabriela A.",
    "city": "Porto Alegre, RS",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Aprovado",
    "text": "Good Girl Blush Polka Paradise Carolina Herrera chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   },
   {
    "name": "Clara G.",
    "city": "Campinas, SP",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Aprovado",
    "text": "Comprei o Good Girl Blush Polka Paradise Carolina Herrera e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   }
  ]
 },
 {
  "id": "73",
  "slug": "fantasy-jungle-perfume-feminino-eau-de-toilette",
  "gender": "feminino",
  "name": "Fantasy Jungle Perfume Feminino Eau de Toilette",
  "category": "importado",
  "btu": 100,
  "price": 140,
  "oldPrice": 180,
  "installments": 10,
  "installmentValue": 13.9,
  "image": "/assets/fantasy-jungle-perfume-feminino-eau-de-toilette-6847376-B8CTSQYG.webp",
  "gallery": [
   "/assets/fantasy-jungle-perfume-feminino-eau-de-toilette-6847376-B8CTSQYG.webp",
   "/assets/fantasy-jungle-perfume-feminino-eau-de-toilette-6847376-B8CTSQYG.webp",
   "/assets/fantasy-jungle-perfume-feminino-eau-de-toilette-6847376-B8CTSQYG.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "30ml",
   "100ml"
  ],
  "sizePrices": {
   "30ml": {
    "price": 100,
    "oldPrice": 130
   },
   "100ml": {
    "price": 140,
    "oldPrice": 180
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 132,
  "reviewsList": [
   {
    "name": "Vanessa M.",
    "city": "São Paulo, SP",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Cheiro incrível",
    "text": "Fragrância delicada e marcante ao mesmo tempo. O Fantasy Jungle virou meu perfume diário. Recomendo demais!",
    "verified": true
   },
   {
    "name": "Tatiane L.",
    "city": "Fortaleza, CE",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Melhor compra do mês",
    "text": "Fragrância delicada e marcante ao mesmo tempo. O Fantasy Jungle virou meu perfume diário. Recomendo demais!",
    "verified": true
   },
   {
    "name": "Juliana V.",
    "city": "Natal, RN",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Fragrância impecável",
    "text": "Fragrância delicada e marcante ao mesmo tempo. O Fantasy Jungle virou meu perfume diário. Recomendo demais!",
    "verified": true
   },
   {
    "name": "Carolina P.",
    "city": "Curitiba, PR",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Vale cada centavo",
    "text": "Fragrância delicada e marcante ao mesmo tempo. O Fantasy Jungle virou meu perfume diário. Recomendo demais!",
    "verified": true
   },
   {
    "name": "Mariana D.",
    "city": "Florianópolis, SC",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Original e maravilhoso",
    "text": "Fragrância delicada e marcante ao mesmo tempo. O Fantasy Jungle virou meu perfume diário. Recomendo demais!",
    "verified": true
   },
   {
    "name": "Helena C.",
    "city": "Maceió, AL",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Recomendo",
    "text": "Comprei o Fantasy Jungle e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   },
   {
    "name": "Amanda N.",
    "city": "Recife, PE",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Recomendo",
    "text": "Bom perfume, Fantasy Jungle tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   }
  ]
 },
 {
  "id": "74",
  "slug": "versace-dylan-purple-perfume-feminino-eau-de-parfum",
  "gender": "feminino",
  "name": "Versace Dylan Purple Perfume Feminino Eau de Parfum",
  "category": "importado",
  "btu": 100,
  "price": 520,
  "oldPrice": 660,
  "installments": 10,
  "installmentValue": 51.9,
  "image": "/assets/versace-dylan-purple-perfume-feminino-eau-de-parfum-5064979-i2r7-sie.webp",
  "gallery": [
   "/assets/versace-dylan-purple-perfume-feminino-eau-de-parfum-5064979-i2r7-sie.webp",
   "/assets/versace-dylan-purple-perfume-feminino-eau-de-parfum-5064979-i2r7-sie.webp",
   "/assets/versace-dylan-purple-perfume-feminino-eau-de-parfum-5064979-i2r7-sie.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "30ml",
   "50ml",
   "100ml"
  ],
  "sizePrices": {
   "30ml": {
    "price": 320,
    "oldPrice": 410
   },
   "50ml": {
    "price": 400,
    "oldPrice": 510
   },
   "100ml": {
    "price": 520,
    "oldPrice": 660
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 135,
  "reviewsList": [
   {
    "name": "Luiza R.",
    "city": "Vitória, ES",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Chegou perfeito",
    "text": "Para quem ama Versace Dylan Purple, comprem aqui sem medo. Original, lacrado, com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Camila O.",
    "city": "Belo Horizonte, MG",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Apaixonado pela fragrância",
    "text": "Para quem ama Versace Dylan Purple, comprem aqui sem medo. Original, lacrado, com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Larissa M.",
    "city": "Goiânia, GO",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Fixação absurda",
    "text": "Para quem ama Versace Dylan Purple, comprem aqui sem medo. Original, lacrado, com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Isabela L.",
    "city": "Cuiabá, MT",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Surpreendeu demais",
    "text": "Para quem ama Versace Dylan Purple, comprem aqui sem medo. Original, lacrado, com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Sofia V.",
    "city": "Salvador, BA",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Sensacional!",
    "text": "Para quem ama Versace Dylan Purple, comprem aqui sem medo. Original, lacrado, com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Letícia P.",
    "city": "Manaus, AM",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Cheiro gostoso",
    "text": "Bom perfume, Versace Dylan Purple tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   },
   {
    "name": "Aline D.",
    "city": "Rio de Janeiro, RJ",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Cheiro gostoso",
    "text": "Versace Dylan Purple chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   }
  ]
 },
 {
  "id": "75",
  "slug": "versace-bright-crystal-absolu-feminino-eau-de-parfum",
  "gender": "feminino",
  "name": "Versace Bright Crystal Absolu Feminino Eau de Parfum",
  "category": "importado",
  "btu": 100,
  "price": 450,
  "oldPrice": 580,
  "installments": 10,
  "installmentValue": 44.9,
  "image": "/assets/versace-bright-crystal-absolu-feminino-eau-de-parfum-9584234-BuVNnajY.webp",
  "gallery": [
   "/assets/versace-bright-crystal-absolu-feminino-eau-de-parfum-9584234-BuVNnajY.webp",
   "/assets/versace-bright-crystal-absolu-feminino-eau-de-parfum-9584234-BuVNnajY.webp",
   "/assets/versace-bright-crystal-absolu-feminino-eau-de-parfum-9584234-BuVNnajY.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "30ml",
   "50ml",
   "90ml"
  ],
  "sizePrices": {
   "30ml": {
    "price": 280,
    "oldPrice": 360
   },
   "50ml": {
    "price": 350,
    "oldPrice": 450
   },
   "90ml": {
    "price": 450,
    "oldPrice": 580
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 138,
  "reviewsList": [
   {
    "name": "Marina S.",
    "city": "Brasília, DF",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Melhor compra do mês",
    "text": "Sempre quis o Versace Bright Crystal Absolu e finalmente comprei. Veio original, lacrado e por um preço muito melhor que em shopping.",
    "verified": true
   },
   {
    "name": "Patrícia B.",
    "city": "João Pessoa, PB",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Fragrância impecável",
    "text": "Sempre quis o Versace Bright Crystal Absolu e finalmente comprei. Veio original, lacrado e por um preço muito melhor que em shopping.",
    "verified": true
   },
   {
    "name": "Priscila R.",
    "city": "Porto Alegre, RS",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Vale cada centavo",
    "text": "Sempre quis o Versace Bright Crystal Absolu e finalmente comprei. Veio original, lacrado e por um preço muito melhor que em shopping.",
    "verified": true
   },
   {
    "name": "Daniela O.",
    "city": "Campinas, SP",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Original e maravilhoso",
    "text": "Sempre quis o Versace Bright Crystal Absolu e finalmente comprei. Veio original, lacrado e por um preço muito melhor que em shopping.",
    "verified": true
   },
   {
    "name": "Beatriz M.",
    "city": "São Paulo, SP",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Já é meu favorito",
    "text": "Sempre quis o Versace Bright Crystal Absolu e finalmente comprei. Veio original, lacrado e por um preço muito melhor que em shopping.",
    "verified": true
   },
   {
    "name": "Bruna L.",
    "city": "Fortaleza, CE",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Gostei bastante",
    "text": "Versace Bright Crystal Absolu chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   },
   {
    "name": "Gabriela V.",
    "city": "Natal, RN",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Gostei bastante",
    "text": "Comprei o Versace Bright Crystal Absolu e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   }
  ]
 },
 {
  "id": "76",
  "slug": "new-brand-hola-feminino-eau-de-parfum",
  "gender": "feminino",
  "name": "New Brand Hola Feminino Eau De Parfum",
  "category": "importado",
  "btu": 100,
  "price": 60,
  "oldPrice": 80,
  "installments": 10,
  "installmentValue": 5.9,
  "image": "/assets/new-brand-hola-feminino-eau-de-parfum-5235276-B2UkC6Iq.webp",
  "gallery": [
   "/assets/new-brand-hola-feminino-eau-de-parfum-5235276-B2UkC6Iq.webp",
   "/assets/new-brand-hola-feminino-eau-de-parfum-5235276-B2UkC6Iq.webp",
   "/assets/new-brand-hola-feminino-eau-de-parfum-5235276-B2UkC6Iq.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "100ml"
  ],
  "sizePrices": {
   "100ml": {
    "price": 60,
    "oldPrice": 80
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 141,
  "reviewsList": [
   {
    "name": "Fernanda T.",
    "city": "Curitiba, PR",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Apaixonado pela fragrância",
    "text": "New Brand Hola é amor à primeira borrifada. Doce na medida, elegante e duradouro. Vale cada centavo.",
    "verified": true
   },
   {
    "name": "Vanessa F.",
    "city": "Florianópolis, SC",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Fixação absurda",
    "text": "New Brand Hola é amor à primeira borrifada. Doce na medida, elegante e duradouro. Vale cada centavo.",
    "verified": true
   },
   {
    "name": "Tatiane S.",
    "city": "Maceió, AL",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Surpreendeu demais",
    "text": "New Brand Hola é amor à primeira borrifada. Doce na medida, elegante e duradouro. Vale cada centavo.",
    "verified": true
   },
   {
    "name": "Juliana B.",
    "city": "Recife, PE",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Sensacional!",
    "text": "New Brand Hola é amor à primeira borrifada. Doce na medida, elegante e duradouro. Vale cada centavo.",
    "verified": true
   },
   {
    "name": "Carolina R.",
    "city": "Vitória, ES",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Cheiro incrível",
    "text": "New Brand Hola é amor à primeira borrifada. Doce na medida, elegante e duradouro. Vale cada centavo.",
    "verified": true
   },
   {
    "name": "Mariana O.",
    "city": "Belo Horizonte, MG",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Bom custo-benefício",
    "text": "Comprei o New Brand Hola e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   },
   {
    "name": "Helena M.",
    "city": "Goiânia, GO",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Bom custo-benefício",
    "text": "Bom perfume, New Brand Hola tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   }
  ]
 },
 {
  "id": "77",
  "slug": "ciclo-lata-hello-hello-deo-colonia-100ml",
  "gender": "unissex",
  "name": "Ciclo Lata Hello Hello Deo Colônia 100ml",
  "category": "importado",
  "btu": 100,
  "price": 50,
  "oldPrice": 60,
  "installments": 10,
  "installmentValue": 4.9,
  "image": "/assets/ciclo-lata-hello-hello-deo-colonia-100ml-7075630-B5mzfCeo.webp",
  "gallery": [
   "/assets/ciclo-lata-hello-hello-deo-colonia-100ml-7075630-B5mzfCeo.webp",
   "/assets/ciclo-lata-hello-hello-deo-colonia-100ml-7075630-B5mzfCeo.webp",
   "/assets/ciclo-lata-hello-hello-deo-colonia-100ml-7075630-B5mzfCeo.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "100ml"
  ],
  "sizePrices": {
   "100ml": {
    "price": 50,
    "oldPrice": 60
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 144,
  "reviewsList": [
   {
    "name": "Renata A.",
    "city": "Cuiabá, MT",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Fragrância impecável",
    "text": "O Ciclo Lata Hello Hello Deo Colônia 100ml é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Luiza G.",
    "city": "Salvador, BA",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Vale cada centavo",
    "text": "O Ciclo Lata Hello Hello Deo Colônia 100ml é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Camila T.",
    "city": "Manaus, AM",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Original e maravilhoso",
    "text": "O Ciclo Lata Hello Hello Deo Colônia 100ml é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Larissa F.",
    "city": "Rio de Janeiro, RJ",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Já é meu favorito",
    "text": "O Ciclo Lata Hello Hello Deo Colônia 100ml é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Isabela S.",
    "city": "Brasília, DF",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Chegou perfeito",
    "text": "O Ciclo Lata Hello Hello Deo Colônia 100ml é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Sofia B.",
    "city": "João Pessoa, PB",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Muito bom",
    "text": "Bom perfume, Ciclo Lata Hello Hello Deo Colônia 100ml tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   },
   {
    "name": "Letícia R.",
    "city": "Porto Alegre, RS",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Muito bom",
    "text": "Ciclo Lata Hello Hello Deo Colônia 100ml chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   }
  ]
 },
 {
  "id": "78",
  "slug": "versace-versense-feminino-eau-de-toilette",
  "gender": "feminino",
  "name": "Versace Versense Feminino Eau de Toilette",
  "category": "importado",
  "btu": 100,
  "price": 450,
  "oldPrice": 580,
  "installments": 10,
  "installmentValue": 44.9,
  "image": "/assets/versace-versense-feminino-eau-de-toilette-7548518-BPUcbQ5X.webp",
  "gallery": [
   "/assets/versace-versense-feminino-eau-de-toilette-7548518-BPUcbQ5X.webp",
   "/assets/versace-versense-feminino-eau-de-toilette-7548518-BPUcbQ5X.webp",
   "/assets/versace-versense-feminino-eau-de-toilette-7548518-BPUcbQ5X.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "30ml",
   "50ml",
   "100ml"
  ],
  "sizePrices": {
   "30ml": {
    "price": 280,
    "oldPrice": 360
   },
   "50ml": {
    "price": 350,
    "oldPrice": 450
   },
   "100ml": {
    "price": 450,
    "oldPrice": 580
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 147,
  "reviewsList": [
   {
    "name": "Natália C.",
    "city": "Campinas, SP",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Fixação absurda",
    "text": "Embalagem perfeita, frasco lindo, projeção ótima. O Versace Versense é simplesmente encantador. Já é o segundo que peço.",
    "verified": true
   },
   {
    "name": "Marina N.",
    "city": "São Paulo, SP",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Surpreendeu demais",
    "text": "Embalagem perfeita, frasco lindo, projeção ótima. O Versace Versense é simplesmente encantador. Já é o segundo que peço.",
    "verified": true
   },
   {
    "name": "Patrícia A.",
    "city": "Fortaleza, CE",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Sensacional!",
    "text": "Embalagem perfeita, frasco lindo, projeção ótima. O Versace Versense é simplesmente encantador. Já é o segundo que peço.",
    "verified": true
   },
   {
    "name": "Priscila G.",
    "city": "Natal, RN",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Cheiro incrível",
    "text": "Embalagem perfeita, frasco lindo, projeção ótima. O Versace Versense é simplesmente encantador. Já é o segundo que peço.",
    "verified": true
   },
   {
    "name": "Daniela T.",
    "city": "Curitiba, PR",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Melhor compra do mês",
    "text": "Embalagem perfeita, frasco lindo, projeção ótima. O Versace Versense é simplesmente encantador. Já é o segundo que peço.",
    "verified": true
   },
   {
    "name": "Beatriz F.",
    "city": "Florianópolis, SC",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Atendeu as expectativas",
    "text": "Versace Versense chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   },
   {
    "name": "Bruna S.",
    "city": "Maceió, AL",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Atendeu as expectativas",
    "text": "Comprei o Versace Versense e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   }
  ]
 },
 {
  "id": "79",
  "slug": "212-sexy-feminino-eau-de-parfum",
  "gender": "feminino",
  "name": "212 Sexy Feminino Eau de Parfum",
  "category": "importado",
  "btu": 100,
  "price": 590,
  "oldPrice": 760,
  "installments": 10,
  "installmentValue": 58.9,
  "image": "/assets/212-sexy-feminino-eau-de-parfum-4894882-E_0d0xd1.webp",
  "gallery": [
   "/assets/212-sexy-feminino-eau-de-parfum-4894882-E_0d0xd1.webp",
   "/assets/212-sexy-feminino-eau-de-parfum-4894882-E_0d0xd1.webp",
   "/assets/212-sexy-feminino-eau-de-parfum-4894882-E_0d0xd1.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "30ml",
   "60ml",
   "100ml"
  ],
  "sizePrices": {
   "30ml": {
    "price": 370,
    "oldPrice": 470
   },
   "60ml": {
    "price": 460,
    "oldPrice": 590
   },
   "100ml": {
    "price": 590,
    "oldPrice": 760
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 150,
  "reviewsList": [
   {
    "name": "Clara P.",
    "city": "Recife, PE",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Vale cada centavo",
    "text": "Comprei o 212 Sexy e me apaixonei. Chegou lacrado, frasco original e o cheiro é idêntico ao da perfumaria. Fixou o dia todo.",
    "verified": true
   },
   {
    "name": "Fernanda D.",
    "city": "Vitória, ES",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Original e maravilhoso",
    "text": "Comprei o 212 Sexy e me apaixonei. Chegou lacrado, frasco original e o cheiro é idêntico ao da perfumaria. Fixou o dia todo.",
    "verified": true
   },
   {
    "name": "Vanessa C.",
    "city": "Belo Horizonte, MG",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Já é meu favorito",
    "text": "Comprei o 212 Sexy e me apaixonei. Chegou lacrado, frasco original e o cheiro é idêntico ao da perfumaria. Fixou o dia todo.",
    "verified": true
   },
   {
    "name": "Tatiane N.",
    "city": "Goiânia, GO",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Chegou perfeito",
    "text": "Comprei o 212 Sexy e me apaixonei. Chegou lacrado, frasco original e o cheiro é idêntico ao da perfumaria. Fixou o dia todo.",
    "verified": true
   },
   {
    "name": "Juliana A.",
    "city": "Cuiabá, MT",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Apaixonado pela fragrância",
    "text": "Comprei o 212 Sexy e me apaixonei. Chegou lacrado, frasco original e o cheiro é idêntico ao da perfumaria. Fixou o dia todo.",
    "verified": true
   },
   {
    "name": "Carolina G.",
    "city": "Salvador, BA",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Aprovado",
    "text": "Comprei o 212 Sexy e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   },
   {
    "name": "Mariana T.",
    "city": "Manaus, AM",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Aprovado",
    "text": "Bom perfume, 212 Sexy tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   }
  ]
 },
 {
  "id": "80",
  "slug": "versace-crystal-noir-feminino-eau-de-parfum",
  "gender": "feminino",
  "name": "Versace Crystal Noir Feminino Eau de Parfum",
  "category": "importado",
  "btu": 100,
  "price": 450,
  "oldPrice": 580,
  "installments": 10,
  "installmentValue": 44.9,
  "image": "/assets/versace-crystal-noir-feminino-eau-de-parfum-1238809-ufnt45ZC.webp",
  "gallery": [
   "/assets/versace-crystal-noir-feminino-eau-de-parfum-1238809-ufnt45ZC.webp",
   "/assets/versace-crystal-noir-feminino-eau-de-parfum-1238809-ufnt45ZC.webp",
   "/assets/versace-crystal-noir-feminino-eau-de-parfum-1238809-ufnt45ZC.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "30ml",
   "50ml",
   "90ml"
  ],
  "sizePrices": {
   "30ml": {
    "price": 280,
    "oldPrice": 360
   },
   "50ml": {
    "price": 350,
    "oldPrice": 450
   },
   "90ml": {
    "price": 450,
    "oldPrice": 580
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 153,
  "reviewsList": [
   {
    "name": "Amanda L.",
    "city": "Rio de Janeiro, RJ",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Surpreendeu demais",
    "text": "Fragrância delicada e marcante ao mesmo tempo. O Versace Crystal Noir virou meu perfume diário. Recomendo demais!",
    "verified": true
   },
   {
    "name": "Renata V.",
    "city": "Brasília, DF",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Sensacional!",
    "text": "Fragrância delicada e marcante ao mesmo tempo. O Versace Crystal Noir virou meu perfume diário. Recomendo demais!",
    "verified": true
   },
   {
    "name": "Luiza P.",
    "city": "João Pessoa, PB",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Cheiro incrível",
    "text": "Fragrância delicada e marcante ao mesmo tempo. O Versace Crystal Noir virou meu perfume diário. Recomendo demais!",
    "verified": true
   },
   {
    "name": "Camila D.",
    "city": "Porto Alegre, RS",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Melhor compra do mês",
    "text": "Fragrância delicada e marcante ao mesmo tempo. O Versace Crystal Noir virou meu perfume diário. Recomendo demais!",
    "verified": true
   },
   {
    "name": "Larissa C.",
    "city": "Campinas, SP",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Fragrância impecável",
    "text": "Fragrância delicada e marcante ao mesmo tempo. O Versace Crystal Noir virou meu perfume diário. Recomendo demais!",
    "verified": true
   },
   {
    "name": "Isabela N.",
    "city": "São Paulo, SP",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Recomendo",
    "text": "Bom perfume, Versace Crystal Noir tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   },
   {
    "name": "Sofia A.",
    "city": "Fortaleza, CE",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Recomendo",
    "text": "Versace Crystal Noir chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   }
  ]
 },
 {
  "id": "81",
  "slug": "ciclo-colonia-feminino-kiss-you-more",
  "gender": "feminino",
  "name": "Ciclo Colônia Feminino Kiss You More",
  "category": "importado",
  "btu": 100,
  "price": 50,
  "oldPrice": 60,
  "installments": 10,
  "installmentValue": 4.9,
  "image": "/assets/ciclo-colonia-feminino-kiss-you-more-3276896-D1TxKESx.webp",
  "gallery": [
   "/assets/ciclo-colonia-feminino-kiss-you-more-3276896-D1TxKESx.webp",
   "/assets/ciclo-colonia-feminino-kiss-you-more-3276896-D1TxKESx.webp",
   "/assets/ciclo-colonia-feminino-kiss-you-more-3276896-D1TxKESx.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "100ml"
  ],
  "sizePrices": {
   "100ml": {
    "price": 50,
    "oldPrice": 60
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 156,
  "reviewsList": [
   {
    "name": "Aline O.",
    "city": "Natal, RN",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Original e maravilhoso",
    "text": "Para quem ama Ciclo Colônia, comprem aqui sem medo. Original, lacrado, com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Natália M.",
    "city": "Curitiba, PR",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Já é meu favorito",
    "text": "Para quem ama Ciclo Colônia, comprem aqui sem medo. Original, lacrado, com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Marina L.",
    "city": "Florianópolis, SC",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Chegou perfeito",
    "text": "Para quem ama Ciclo Colônia, comprem aqui sem medo. Original, lacrado, com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Patrícia V.",
    "city": "Maceió, AL",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Apaixonado pela fragrância",
    "text": "Para quem ama Ciclo Colônia, comprem aqui sem medo. Original, lacrado, com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Priscila P.",
    "city": "Recife, PE",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Fixação absurda",
    "text": "Para quem ama Ciclo Colônia, comprem aqui sem medo. Original, lacrado, com selo de autenticidade. Chegou em 3 dias.",
    "verified": true
   },
   {
    "name": "Daniela D.",
    "city": "Vitória, ES",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Cheiro gostoso",
    "text": "Ciclo Colônia chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   },
   {
    "name": "Beatriz C.",
    "city": "Belo Horizonte, MG",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Cheiro gostoso",
    "text": "Comprei o Ciclo Colônia e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   }
  ]
 },
 {
  "id": "82",
  "slug": "ciclo-lata-kiss-deo-colonia",
  "gender": "unissex",
  "name": "Ciclo Lata Kiss Deo Colônia",
  "category": "importado",
  "btu": 100,
  "price": 50,
  "oldPrice": 60,
  "installments": 10,
  "installmentValue": 4.9,
  "image": "/assets/ciclo-lata-kiss-deo-colonia-6888899-B8eIFFg_.webp",
  "gallery": [
   "/assets/ciclo-lata-kiss-deo-colonia-6888899-B8eIFFg_.webp",
   "/assets/ciclo-lata-kiss-deo-colonia-6888899-B8eIFFg_.webp",
   "/assets/ciclo-lata-kiss-deo-colonia-6888899-B8eIFFg_.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "100ml"
  ],
  "sizePrices": {
   "100ml": {
    "price": 50,
    "oldPrice": 60
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 159,
  "reviewsList": [
   {
    "name": "Gabriela B.",
    "city": "Goiânia, GO",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Sensacional!",
    "text": "Sempre quis o Ciclo Lata Kiss Deo Colônia e finalmente comprei. Veio original, lacrado e por um preço muito melhor que em shopping.",
    "verified": true
   },
   {
    "name": "Clara R.",
    "city": "Cuiabá, MT",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Cheiro incrível",
    "text": "Sempre quis o Ciclo Lata Kiss Deo Colônia e finalmente comprei. Veio original, lacrado e por um preço muito melhor que em shopping.",
    "verified": true
   },
   {
    "name": "Fernanda O.",
    "city": "Salvador, BA",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Melhor compra do mês",
    "text": "Sempre quis o Ciclo Lata Kiss Deo Colônia e finalmente comprei. Veio original, lacrado e por um preço muito melhor que em shopping.",
    "verified": true
   },
   {
    "name": "Vanessa M.",
    "city": "Manaus, AM",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Fragrância impecável",
    "text": "Sempre quis o Ciclo Lata Kiss Deo Colônia e finalmente comprei. Veio original, lacrado e por um preço muito melhor que em shopping.",
    "verified": true
   },
   {
    "name": "Tatiane L.",
    "city": "Rio de Janeiro, RJ",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Vale cada centavo",
    "text": "Sempre quis o Ciclo Lata Kiss Deo Colônia e finalmente comprei. Veio original, lacrado e por um preço muito melhor que em shopping.",
    "verified": true
   },
   {
    "name": "Juliana V.",
    "city": "Brasília, DF",
    "rating": 4,
    "date": "01/01/2026",
    "title": "Gostei bastante",
    "text": "Comprei o Ciclo Lata Kiss Deo Colônia e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   },
   {
    "name": "Carolina P.",
    "city": "João Pessoa, PB",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Gostei bastante",
    "text": "Bom perfume, Ciclo Lata Kiss Deo Colônia tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   }
  ]
 },
 {
  "id": "83",
  "slug": "versace-crystal-noir-feminino-eau-de-toilette",
  "gender": "feminino",
  "name": "Versace Crystal Noir Feminino Eau de Toilette",
  "category": "importado",
  "btu": 100,
  "price": 430,
  "oldPrice": 550,
  "installments": 10,
  "installmentValue": 42.9,
  "image": "/assets/versace-crystal-noir-feminino-eau-de-toilette-4435450-DNtCOii9.webp",
  "gallery": [
   "/assets/versace-crystal-noir-feminino-eau-de-toilette-4435450-DNtCOii9.webp",
   "/assets/versace-crystal-noir-feminino-eau-de-toilette-4435450-DNtCOii9.webp",
   "/assets/versace-crystal-noir-feminino-eau-de-toilette-4435450-DNtCOii9.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "30ml",
   "50ml",
   "90ml"
  ],
  "sizePrices": {
   "30ml": {
    "price": 260,
    "oldPrice": 330
   },
   "50ml": {
    "price": 340,
    "oldPrice": 440
   },
   "90ml": {
    "price": 430,
    "oldPrice": 550
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 162,
  "reviewsList": [
   {
    "name": "Helena F.",
    "city": "Porto Alegre, RS",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Já é meu favorito",
    "text": "Versace Crystal Noir é amor à primeira borrifada. Doce na medida, elegante e duradouro. Vale cada centavo.",
    "verified": true
   },
   {
    "name": "Amanda S.",
    "city": "Campinas, SP",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Chegou perfeito",
    "text": "Versace Crystal Noir é amor à primeira borrifada. Doce na medida, elegante e duradouro. Vale cada centavo.",
    "verified": true
   },
   {
    "name": "Renata B.",
    "city": "São Paulo, SP",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Apaixonado pela fragrância",
    "text": "Versace Crystal Noir é amor à primeira borrifada. Doce na medida, elegante e duradouro. Vale cada centavo.",
    "verified": true
   },
   {
    "name": "Luiza R.",
    "city": "Fortaleza, CE",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Fixação absurda",
    "text": "Versace Crystal Noir é amor à primeira borrifada. Doce na medida, elegante e duradouro. Vale cada centavo.",
    "verified": true
   },
   {
    "name": "Camila O.",
    "city": "Natal, RN",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Surpreendeu demais",
    "text": "Versace Crystal Noir é amor à primeira borrifada. Doce na medida, elegante e duradouro. Vale cada centavo.",
    "verified": true
   },
   {
    "name": "Larissa M.",
    "city": "Curitiba, PR",
    "rating": 4,
    "date": "22/11/2025",
    "title": "Bom custo-benefício",
    "text": "Bom perfume, Versace Crystal Noir tem um cheiro gostoso. Fixou umas 6 horas, suficiente para o dia.",
    "verified": true
   },
   {
    "name": "Isabela L.",
    "city": "Florianópolis, SC",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Bom custo-benefício",
    "text": "Versace Crystal Noir chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   }
  ]
 },
 {
  "id": "84",
  "slug": "nina-feminino-eau-de-toilette",
  "gender": "feminino",
  "name": "Nina Feminino Eau de Toilette",
  "category": "importado",
  "btu": 100,
  "price": 410,
  "oldPrice": 520,
  "installments": 10,
  "installmentValue": 40.9,
  "image": "/assets/nina-feminino-eau-de-toilette-1133173-D4S5N_B_.webp",
  "gallery": [
   "/assets/nina-feminino-eau-de-toilette-1133173-D4S5N_B_.webp",
   "/assets/nina-feminino-eau-de-toilette-1133173-D4S5N_B_.webp",
   "/assets/nina-feminino-eau-de-toilette-1133173-D4S5N_B_.webp"
  ],
  "colors": [
   {
    "name": "Original",
    "hex": "#d4a5c4"
   }
  ],
  "sizes": [
   "30ml",
   "50ml",
   "80ml"
  ],
  "sizePrices": {
   "30ml": {
    "price": 240,
    "oldPrice": 310
   },
   "50ml": {
    "price": 320,
    "oldPrice": 410
   },
   "80ml": {
    "price": 410,
    "oldPrice": 520
   }
  },
  "description": "Perfume feminino importado — fragrância original, lacrada, com nota olfativa marcante e fixação prolongada. Ideal para uso diário ou ocasiões especiais. Produto importado, 100ml, com selo de autenticidade.",
  "rating": 4.8,
  "reviews": 165,
  "reviewsList": [
   {
    "name": "Letícia G.",
    "city": "Maceió, AL",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Cheiro incrível",
    "text": "O Nina é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Aline T.",
    "city": "Recife, PE",
    "rating": 5,
    "date": "15/03/2026",
    "title": "Melhor compra do mês",
    "text": "O Nina é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Natália F.",
    "city": "Vitória, ES",
    "rating": 5,
    "date": "08/04/2026",
    "title": "Fragrância impecável",
    "text": "O Nina é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Marina S.",
    "city": "Belo Horizonte, MG",
    "rating": 5,
    "date": "01/01/2026",
    "title": "Vale cada centavo",
    "text": "O Nina é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Patrícia B.",
    "city": "Goiânia, GO",
    "rating": 5,
    "date": "22/11/2025",
    "title": "Original e maravilhoso",
    "text": "O Nina é maravilhoso, super feminino. Recebo elogios sempre que uso. Entrega rapidíssima pela Parfum Brasil.",
    "verified": true
   },
   {
    "name": "Priscila R.",
    "city": "Cuiabá, MT",
    "rating": 4,
    "date": "15/03/2026",
    "title": "Muito bom",
    "text": "Nina chegou certinho e original. Fixação boa, projeção média. Para o preço que paguei, gostei bastante.",
    "verified": true
   },
   {
    "name": "Daniela O.",
    "city": "Salvador, BA",
    "rating": 4,
    "date": "08/04/2026",
    "title": "Muito bom",
    "text": "Comprei o Nina e atendeu o que esperava. Cheiro fiel ao original, embalagem ok.",
    "verified": true
   }
  ]
 }
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
