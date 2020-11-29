$(Document).ready(function(){
    let tirSize, // Тираж
    prisePapper = 0, // Цена за бумагу
    priceforma = 0, // Цена за форму
    prisePrint = 0, // Цена за печать
    SUM = 0, // Итого
    color_format = ""; // Цветность
    let typePapper = {
       "Выберите бумагу" : 0,
       "Мелованная бумага" : 6.8,
       "Бумага повышеной белезны (SPLENDORGEL)" : 40.5,
       "Prestige Лён" : 45
    };
    let typeColor = {
        "Выберите цветность": {file: 0, print: 0},
        "Односторонняя чёрно-белая": {file: 110, print: 14},
        "Двусторонняя чёрно-белая": {file: 220, print: 28},
        "Односторонняя цветная": {file: 110, print: 37},
        "Цветная с лицевой, ч/б с обратной": {file: 220, print: 51},
        "Двусторонняя цветная": {file: 220, print: 74}
    };
   insertPapper();
   function insertPapper(){
       //<Option value="Мелованная бумага">Мелованная бумага</Option>
       let html="";
       for (type in typePapper)
       html += '<option value="' + type +'">' + type + "</option>";
       $("#card-paper").append(html);
   }
   insertColor();
   function insertColor(){

       let html="";
       for (color in typeColor)
       html += '<option value="' + color +'">' + color + "</option>";
       $("#card-color").append(html);
   }

   $(".calk").change(function(){ 
       tirSize=$("#card-quantity").val()/30;
       pricePapper = typePapper[$("#card-paper").val()] * tirSize;
       old_color_format=color_format;
       color_format = $("#card-color").val();
       priceForma = typeColor[color_format]["file"];
       pricePrint = typeColor[color_format]["print"] * tirSize;
       sum=pricePapper+priceForma+pricePrint;
       $("#final-price").text(sum);
       if(color_format!=old_color_format){
        $("img").hide();
        if(color_format=="Односторонняя чёрно-белая")
        $("#card_1_0").show("slow");
        if(color_format=="Двусторонняя чёрно-белая")
        $("#card_1_1").show("slow");
        if(color_format=="Односторонняя цветная")
        $("#card_4_0").show("slow");
        if(color_format=="Цветная с лицевой, ч/б с обратной")
        $("#card_4_1").show("slow");
        if(color_format=="Двусторонняя цветная")
        $("#card_4_4").show("slow");
       }
   });
});