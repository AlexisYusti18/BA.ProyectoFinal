const jerseysProducts = [
    {
        "id":0,
        "club":"Inter Miami",
        "price":20,
        "img":"https://cf.camisetasfutbol.com.cn/upload/ttmall/img/20210406/01403fb80811985a69782b068fe8df96.png=z-0,0_f-webp",
    },
    {
        "id":1,
        "club":"Atl United",
        "price":20,
        "img":"https://st1.uvnimg.com/a6/e7/a6a8b53846c7b9d80ff4132e45c6/atl1.png"
    },
    {
        "id":2,
        "club":"Manchester City",
        "price":20,
        "img":"https://mezzalacamisetas.com.ar/wp-content/uploads/2022/10/Sin-titulo-4.png",
    },
    {
        "id":3,
        "club":"Manchester United",
        "price":20,
        "img":"https://images.footballfanatics.com/manchester-united/manchester-united-third-authentic-shirt-2022-23-with-shaw-23-printing_ss4_p-13326133+pv-1+u-wjwuo2h2nlauf2bbu7lt+v-1769980b92694056a715b0266e0b671d.png?_hv=2&w=600",
    },
    {
        "id":4,
        "club":"Liverpool",
        "price":20,
        "img":"https://cf.camisetasfutbol.com.cn/upload/ttmall/img/20230506/e42b2d41ef4d0a46ba15a7f08922f409.png=z-0,0_f-webp",
    },
    {
        "id":5,
        "club":"Chelsea",
        "price":20,
        "img":"https://cf.camisetasfutbol.com.cn/upload/ttmall/img/20220707/6e23db892259c3ee61c38720ab0b6b1a.png",
    },
    {
        "id":6,
        "club":"Newcastle United",
        "price":20,
        "img":"https://cf.camisetasfutbol.com.cn/upload/ttmall/img/20230530/d1116c50168d1143a434ffe8bd8f70f2.png=z-0,0_f-webp",
    },
    {
        "id":7,
        "club":"Milan",
        "price":20,
        "img":"https://cf.camisetasfutbol.com.cn/upload/ttmall/img/20230310/672515dfde4078a954f175b8020b069d.png=z-0,0_f-webp",
    },
    {
        "id":8,
        "club":"Inter",
        "price":20,
        "img":"https://cf.camisetasfutbol.com.cn/upload/ttmall/img/20220809/1a8cb7b7b662dc56e4471ad30c0ccc8e.png=z-0,0_f-webp",
    },
    {
        "id":9,
        "club":"Napoli",
        "price":20,
        "img":"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/312/744/products/waewtrytuyyuio1-8eb843f3d04f261ae516794357263416-480-0.webp",
    },
    {
        "id":10,
        "club":"PSG",
        "price":20,
        "img":"https://cf.camisetasfutbol.com.cn/upload/ttmall/img/20230601/89a76bc57e4a91eb0857eb72cb37452b.png=z-0,0_f-webp",
    },
    {
        "id":11,
        "club":"Monaco",
        "price":20,
        "img":"https://cf.camisetasfutbol.com.cn/upload/ttmall/img/20220525/ebeb6e86660aa84642ad8434f7c3e64e.png=z-0,0_f-webp",
    },
    {
        "id":12,
        "club":"Real Madrid",
        "price":20,
        "img":"https://tucamisetasport.com/wp-content/uploads/2022/06/camiseta-real-madrid-2022-2023-removebg-preview.png",
    },
    {
        "id":13,
        "club":"Barcelona",
        "price":20,
        "img":"https://static.nike.com/a/images/t_default/3712faa8-d7c6-4078-ac06-adff9fe6508d/primera-equipacion-stadium-fc-barcelona-2022-23-camiseta-de-futbol-dri-fit-Hn9LCv.png",
    },
    {
        "id":14,
        "club":"Atl Madrid",
        "price":20,
        "img":"https://cf.projerseyshop.cc/upload/ttmall/img/20230412/303da20a74ca72dfd9255b831f506b54.png=z-0,0_f-webp",
    },
    {
        "id":15,
        "club":"Sevilla",
        "price":20,
        "img":"https://cdn.shopify.com/s/files/1/0469/2774/1079/products/TM1230camisetaoficialsevillafcvisitante20222023blanca_530x@2x.png?v=1656676147",
    },
    {
        "id":16,
        "club":"Bayer Munich",
        "price":20,
        "img":"https://img.fcbayern.com/image/upload/q_auto,f_auto/w_800,h_1067,c_pad/eCommerce/produkte/28800",
    },
    {
        "id":17,
        "club":"Borussia Dortmund",
        "price":20,
        "img":"https://cf.camisetasfutbol.com.cn/upload/ttmall/img/20230210/a24aadfa0a6a4be2049a3f664d9b848c.png",
    },
    {
        "id":18,
        "club":"River",
        "price":20,
        "img":"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/312/744/products/wraetryt6srtytiu1-aba4960bfbe5cf62f016802999186183-640-0.webp",
    },
    {
        "id":19,
        "club":"Boca",
        "price":20,
        "img":"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/312/744/products/efgfdgfkjhjl1-a718b94e74979fa6ad16645536452887-640-0.webp",
    },
    {
        "id":20,
        "club":"Chacarita",
        "price":20,
        "img":"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/312/744/products/waetsrytgdfhgsgdrtfy1-5999d0cb0130f0898616835847956717-640-0.webp",
    },
    {
        "id":21,
        "club":"Racing",
        "price":20,
        "img":"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/312/744/products/600_600-k236165lw-k902i_kombat_player_jersey_regular_2021_azure_blue_talle_s_11-173c66138cd15054ec16536034513622-480-0.webp",
    },
    {
        "id":22,
        "club":"Benfica",
        "price":20,
        "img":"https://cf.camisetasfutbol.com.cn/upload/ttmall/img/20220922/67239f5e9eb74f9f46f13bafb60ac7bc.png",
    },
    {
        "id":23,
        "club":"Porto",
        "price":20,
        "img":"https://cf.camisetasfutbol.com.cn/upload/ttmall/img/20220707/bea4aaf7b01f2fb230f9da9a0017dd1c.png=z-0,0_f-webp",
    },

]