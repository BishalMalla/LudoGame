function calcNumber(randomdiceImg, randomDefault = 0){
  let randomIndex = randomDefault || Math.floor(Math.random()*randomdiceImg.length);
  let itemVal = randomdiceImg[randomIndex];
  let itemNum = (randomdiceImg.indexOf(itemVal))+1;
  return {itemVal, itemNum};
}
function greenStatus(red,green,yellow,blue){
  red=false;
  green=true;
  yellow=false;
  blue=false;
  return{red,green,yellow,blue};
}
function itemInLocalStorage(){
    return localStorage.length
}
$(document).ready(function(event){
  var mainplayground =$('.mainplayground');
  var mainBody =$('.mainBody');
  var form =$('form');
  var result = $('.result');
  var redButton =$('.red');
  var greenButton =$('.green');
  var yellowButton =$('.yellow');
  var blueButton =$('.blue');
  var sound = document.getElementById('dice3d-sound');
  var value=0;
  var intoRed=1;
  var intoGreen=1;
  var intoYellow=1;
  var intoBlue=1;
  var iRed=1;
  var iGreen=1;
  var iYellow =1;
  var iBlue=1;
  var i=0;
  var j=0;
  var k=0;
  var l=0;
  var countr=1;
  var county=1;
  var countg=1;
  var countb=1;
  var countR,countG,countY,countB;
  var countbb;
  var positionr;
  var positiong;
  var positiony;
  var positionb;
  var borderNoneAreaRed=[32,33,47,48]
  var borderNoneAreaGreen=[41,42,56,57];
  var borderNoneAreaYellow=[176,177,191,192];
  var borderNoneAreaBlue=[167,168,182,183];
  var
   redMoveArea=[0,92,93,94,95,81,66,51,36,21,6,7,8,38,53,68,83,99,100,101,102,103,104,119,134,132,131,130,129,143,158,173,188,203,218,217,216,186,171,156,141,125,124,123,122,121,120,105,106,107,108,109,110,111]
  var pointerRed = redMoveArea[0];
  var countRed=0;

  //for green
  var greenMoveArea = [0,38,53,68,83,99,100,101,102,103,104,119,134,132,131,130,129,143,158,173,188,203,218,217,216,186,171,156,141,125,124,123,122,121,120,105,90,92,93,94,95,81,66,51,36,21,6,7,22,37,52,67,82,97]
  var pointerGreen = greenMoveArea[0];
  var countGreen=0;

  //for yellow
  var yellowMoveArea =[0,132,131,130,129,143,158,173,188,203,218,217,216,186,171,156,141,125,124,123,122,121,120,105,90,92,93,94,95,81,66,51,36,21,6,7,8,38,53,68,83,99,100,101,102,103,104,119,118,117,116,115,114,113]
  var pointerYellow = yellowMoveArea[0];
  var countYellow=0;


  //for blue
  var blueMoveArea=[0,186,171,156,141,125,124,123,122,121,120,105,90,92,93,94,95,81,66,51,36,21,6,7,8,38,53,68,83,99,100,101,102,103,104,119,134,132,131,130,129,143,158,173,188,203,218,217,202,187,172,157,142,127]
  var pointerBlue = blueMoveArea[0];
  var countBlue=0;


  //boolean value for turn
  var red=true;
  var blue=false;
  var green =false;
  var yellow=false;
  var pathplayingfront=[23,38,53,68,83,99,100,101,102,103,104,119,134,133,132,131,130,129,143,158,173,188]
  var playingAreaBack=[203,218,217,216,201,186,171,156,141,125,124,123,122,121,120,105,90,91,92,93,94,95,81,66,51,36,21,6,7,8];
  var pathplayingArea=pathplayingfront.concat(playingAreaBack);
  for(let row=0;row<15;row++){
     for(let column=0;column<15;column++){
      divs = $('<div>');
      divs.addClass('divs');
      // divs.html(value);
      divs.width('37px');
      divs.height('37px');
      divs.css('border','1px solid black');
      divs.css( "background-color", "white");
      divs.css('float','left');
      mainplayground.append(divs);
      value++
    }
  }
  mainplayground[0].children[201].style.content= "url('Images/blueplane.png')";
  mainplayground[0].children[91].style.content= "url('Images/redplane.png')";
  mainplayground[0].children[23].style.content= "url('Images/greenplane.png')";
  mainplayground[0].children[133].style.content= "url('Images/yellowplane.png')";
  mainplayground[0].children[112].style.backgroundImage='linear-gradient(45deg, #ff4242 50%, #35f387 50%), linear-gradient(135deg, #ff4242 50%, #8b7fff 50%), linear-gradient(135deg, #35f387 50%, #dfec5e 50%) , linear-gradient(225deg, #dfec5e 50%, #8b7fff 50%)';
  mainplayground[0].children[112].style.backgroundSize='50% 50%';
  mainplayground[0].children[112].style.backgroundPosition =' 0% 0%, 0% 100%, 100% 0%, 100% 100%';
  mainplayground[0].children[112].style.backgroundRepeat ='no-repeat';
  mainplayground[0].children[96].style.backgroundImage='linear-gradient(45deg,#ff4242 50%,#35f387 50%)';
  mainplayground[0].children[98].style.backgroundImage='linear-gradient(135deg,#35f387 50%,#dfec5e 50%)';
  mainplayground[0].children[128].style.backgroundImage='linear-gradient(45deg,#8b7fff 50%,#dfec5e 50%)';
  mainplayground[0].children[126].style.backgroundImage='linear-gradient(135deg,#ff4242 50%,#8b7fff 50%)';

  for(let i=0;i<borderNoneAreaRed.length;i++){
    mainplayground[0].children[borderNoneAreaRed[i]].style.border='none'
    mainplayground[0].children[borderNoneAreaRed[i]].style.content = "url('Images/redtower.png')";
  }
  for(let i=0;i<borderNoneAreaGreen.length;i++){
    mainplayground[0].children[borderNoneAreaGreen[i]].style.border='none';
    mainplayground[0].children[borderNoneAreaGreen[i]].style.content = "url('Images/greentower.png')";
  }
  for(let i=0;i<borderNoneAreaYellow.length;i++){
    mainplayground[0].children[borderNoneAreaYellow[i]].style.border='none';
    mainplayground[0].children[borderNoneAreaYellow[i]].style.content = "url('Images/yellowtower.png')";
  }
  for(let i=0;i<borderNoneAreaBlue.length;i++){
    mainplayground[0].children[borderNoneAreaBlue[i]].style.border='none';
    mainplayground[0].children[borderNoneAreaBlue[i]].style.content = "url('Images/bluetower.png')";
  }
  mainplayground[0].children[111].style.content= "url('Images/home.ico')";
  mainplayground[0].children[97].style.content= "url('Images/home.ico')";
  mainplayground[0].children[127].style.content= "url('Images/home.ico')";
  mainplayground[0].children[113].style.content= "url('Images/home.ico')";
  playingArea();
  redArea();
  greenArea();
  yellowArea();
  blueArea();
  function playingArea(){
    for(let i=0;i<pathplayingArea.length;i++){
        mainplayground[0].children[pathplayingArea[i]].style.backgroundColor = 'white';
    }
  }
  function redArea(){
    var pathred =[0,1,2,3,4,5,15,20,30,35,45,50,60,65,75,76,77,78,79,80]
    for(let i=0;i<pathred.length;i++){

      mainplayground[0].children[pathred[i]].style.backgroundColor = 'red';
    }
    var pathred1=[106,107,108,109,110,111]
      for(let i=0;i<pathred1.length;i++){

        mainplayground[0].children[pathred1[i]].style.backgroundColor = '#ff4242';
      }
  }
  function greenArea(){
    var pathgreen =[9,10,11,12,13,14,24,39,54,69,84,85,86,87,88,89,74,59,44,29]
    for(let i=0;i<pathgreen.length;i++){
      mainplayground[0].children[pathgreen[i]].style.backgroundColor = 'green';
    }
    var pathgreen1=[22,37,52,67,82,97]
    for(let i=0;i<pathgreen1.length;i++){
      mainplayground[0].children[pathgreen1[i]].style.backgroundColor='#35f387';
    }
  }
  function yellowArea(){
    var pathyellow =[144,145,146,147,148,149,164,179,194,209,224,159,174,189,204,219,220,221,222,223]
    for(let i=0;i<pathyellow.length;i++){
      mainplayground[0].children[pathyellow[i]].style.backgroundColor = 'yellow';
    }
    var pathyellow1 = [113,114,115,116,117,118]
    for(let i=0;i<pathyellow1.length;i++){
      mainplayground[0].children[pathyellow1[i]].style.backgroundColor = '#dfec5e';
    }
  }
  function blueArea(){
    var pathblue =[135,136,137,138,139,140,155,170,185,200,215,214,213,212,211,210,150,165,180,195]
    for(let i=0;i<pathblue.length;i++){
      mainplayground[0].children[pathblue[i]].style.backgroundColor = 'blue';
    }
    var pathblue1 = [202,187,172,157,142,127]
    for(let i=0;i<pathblue1.length;i++){
      mainplayground[0].children[pathblue1[i]].style.backgroundColor = '#8b7fff';
    }
  }
  function redPlay(){
    if(red===true){
      insideRedPlay();
    }
  }
  function greenPlay(){
    if(green===true){
      insideGreenPlay();
    }
  }
  function yellowPlay(){

    if(yellow===true){
      insideYellowPlay();
    }
  }
  function bluePlay(){
        if(blue===true){
          insideBluePlay();
    }
  }
  redButton.click(function(event){
    event.preventDefault();
    redPlay();
  })
  greenButton.click(function(event){
    event.preventDefault();
    console.log(green);
    greenPlay();
  })
  yellowButton.click(function(event){
    event.preventDefault();
    yellowPlay();
  })
  blueButton.click(function(event){
    event.preventDefault();
    bluePlay();
  })
  function insideBluePlay(){
    sound.play();
    result[0].style.color='blue';
    if(l>0){
      mainplayground[0].children[blueMoveArea[countBlue]].style.content = "url('')";
    }
    if(countb !==6){
      countbb=randomImg(".diceImg");
      countb=Number(countbb.id);
      setTimeout(function(){
        countbb.src="";
      }, 1500);
      if(iBlue>0){
        result.html('You Rolled:' + countb);
        timer();
        iBlue++;
      }
    }
    if(countb===6){
      var countBB = randomImg(".diceInsideImg")
      countB = Number(countBB.id);
    }
    if(countb===6 && countBlue<53){
      countBlue+= countB;
      positionb = blueMoveArea[countBlue];
      if(intoBlue>0){
        result.html('Hurray !!! You Rolled: 6' +' and '+ countB)
        timer();
        intoBlue=0;
      }else{
        result.html('You Rolled:' + countB);
        timer();
      }
      red=true;
      green=false;
      yellow = false;
      blue = false;
      countb=6;
      l++;
      if(countBlue<53){
        mainplayground[0].children[blueMoveArea[countBlue]].style.content = "url('Images/bluetower.png')";
        mainplayground[0].children[borderNoneAreaBlue[2]].style.content = "url('')";
        if(positionb===positionr){
          countr=0;
          countR=0;
          countRed=0;
          intoRed=1;
          iRed=1;
          mainplayground[0].children[borderNoneAreaRed[2]].style.content = "url('Images/redtower.png')";
        }
        if(positionb===positiong){
          countg=0;
          countG=0;
          countGreen=0;
          intoGreen=1;
          iGreen=1;
          mainplayground[0].children[borderNoneAreaGreen[2]].style.content = "url('Images/greentower.png')";
        }
        if(positionb===positiony){
          county=0;
          countY=0;
          countYellow=0;
          intoYellow=1;
          iYellow=1;
          mainplayground[0].children[borderNoneAreaYellow[2]].style.content = "url('Images/yellowtower.png')";
        }
        setTimeout(function(){
          countBB.src="";
        }, 1500);
      }
      if(countBlue>53){
        countBlue = countBlue - countB;
        mainplayground[0].children[blueMoveArea[countBlue]].style.content = "url('Images/bluetower.png')";
      }
      if(countBlue===53){
        result.html('Blue Won')
        countb=0;
        countB=0;
        countBlue=0;
        intoBlue=1;
        iBlue=1;
      }
    }else{
      red = true;
      green = false;
      yellow=false
      blue=false;
    }
  }
  function insideRedPlay(){
    sound.play();
    result[0].style.color='red';
    if(i>0){
      mainplayground[0].children[redMoveArea[countRed]].style.content = "url('')";
    }
    if(countr!==6){
        var countrr=randomImg('.diceImg');
        countr=Number(countrr.id);
        setTimeout(function(){
          countrr.src="";
        }, 1500);
       if(iRed>0){
         result.html('You Rolled:' + countr);
         timer();
         iRed++;
       }
    }
    if(countr===6){
      var countRR = randomImg('.diceInsideImg')
      countR = Number(countRR.id);
    }
      if(countr==6 && countRed<53){
        mainplayground[0].children[borderNoneAreaRed[2]].style.content = "url('')";
        countRed+=countR
        positionr =redMoveArea[countRed];
        if(intoRed>0){
          result.html('hurray!!! You Rolled: 6' +' and '+ countR);
          timer();
          intoRed=0;
        }else{
          result.html('You Rolled: '+ countR);
          timer();
        }
        red=false;
        green=true;
        yellow = false;
        blue = false;
        countr = 6;
        i++;
        if(countRed<53){
          mainplayground[0].children[redMoveArea[countRed]].style.content = "url('Images/redtower.png')";
          if(positionr===positionb){
            countb=0;
            countB=0;
            countBlue=0;
            intoBlue=1;
            iBlue=1;
            mainplayground[0].children[borderNoneAreaBlue[2]].style.content = "url('Images/bluetower.png')";
          }
          if(positionr===positiong){
            countg=0;
            countG=0;
            countGreen=0;
            intoGreen=1;
            iGreen=1;
            mainplayground[0].children[borderNoneAreaGreen[2]].style.content = "url('Images/greentower.png')";
          }
          if(positionr===positiony){
            county=0;
            countY=0;
            countYellow=0;
            intoYellow=1;
            iYellow=1;
            mainplayground[0].children[borderNoneAreaYellow[2]].style.content = "url('Images/yellowtower.png')";
          }
          setTimeout(function(){
            countRR.src="";
          }, 1500);

        }
        if(countRed>53){
          countRed=countRed-countR;
          mainplayground[0].children[redMoveArea[countRed]].style.content = "url('Images/redtower.png')";
        }if(countRed===53){
          result.html('Red win');
          countr=0;
          countR=0;
          countRed=0
          intoRed=1;
          iRed=1;
        }
      }else{
        var a=greenStatus(red,green,yellow,blue);
        console.log(a);
        red=false;
        // green=true;
        yellow = false;
        blue = false;
        green = Object.values(a)[1];
      }
  }
  function insideGreenPlay(){
    sound.play();
    result[0].style.color='green';
    if(j>0){
      mainplayground[0].children[greenMoveArea[countGreen]].style.content ="url('')";
    }
    if(countg!==6){
      var countgg=randomImg('.diceImg');
      countg=Number(countgg.id);
      setTimeout(function(){
        countgg.src="";
      }, 1500);
      if(iGreen>0){
        result.html('You Rolled:' + countg);
        timer();
        iGreen++;
      }
    }
    if(countg===6){
      var countGG = randomImg('.diceInsideImg')
      countG = Number(countGG.id);
    }
      if(countg==6 && countGreen<53){
        countGreen += countG;
        positiong = greenMoveArea[countGreen]
        if(intoGreen>0){
          result.html('Hurray!!! You Rolled: 6' +' and '+ countG);
          timer();
          intoGreen=0;
        }else{
          result.html('You Rolled: '+ countG)
          timer();
        }
        red=false;
        green=false;
        yellow = true;
        blue = false;
        countg = 6;
        j++;
        if(countGreen<53){
          mainplayground[0].children[greenMoveArea[countGreen]].style.content ="url('Images/greentower.png')";
          mainplayground[0].children[borderNoneAreaGreen[2]].style.content = "url('')";
          if(positiong===positionr){
            countr=0;
            countR=0;
            countRed=0;
            intoRed=1;
            iRed=1;
            mainplayground[0].children[borderNoneAreaRed[2]].style.content = "url('Images/redtower.png')";
          }
          if(positiong===positionb){
            countb=0;
            countB=0;
            countBlue=0;
            intoBlue=1;
            iBlue=1;
            mainplayground[0].children[borderNoneAreaBlue[2]].style.content = "url('Images/bluetower.png')";
          }
          if(positiong===positiony){
            county=0;
            countY=0;
            countYellow=0;
            intoYellow=1;
            iYellow=1;
            mainplayground[0].children[borderNoneAreaYellow[2]].style.content = "url('Images/yellowtower.png')";
          }
        }
        if(countGreen>53){
          countGreen=countGreen-countG;
          mainplayground[0].children[greenMoveArea[countGreen]].style.content = "url('Images/greentower.png')";
        }if(countGreen===53){
          result.html('Green win');
          countg=0;
          countG=0;
          countGreen=0;
          intoGreen=1;
          iGreen=1;
        }
        setTimeout(function(){
          countGG.src="";
        }, 1500);
      }else{
        red = false;
        green = false;
        yellow =true;
        blue=false;
      }
  }
  function insideYellowPlay(){
    sound.play();
    result[0].style.color='orange';
    if(k>0){
      mainplayground[0].children[yellowMoveArea[countYellow]].style.content ="url('')";
    }
    if(county!==6){
      var countyy=randomImg('.diceImg');
      county=Number(countyy.id);
      setTimeout(function(){
        countyy.src="";
      }, 1500);
      if(iYellow>0){
        result.html('You Rolled:' + county);
        timer();
        iYellow++;
      }
    }
    if(county===6){
      var countYY = randomImg('.diceInsideImg')
      countY = Number(countYY.id);
    }
      if(county==6 && countYellow<53){
        countYellow+= countY;
        positiony = yellowMoveArea[countYellow];
        if(intoYellow>0){
          result.html('Hurray!!! You Rolled: 6' +' and '+ countY);
          timer();
          intoYellow=0;
        }else{
          result.html('You Rolled: '+ countY)
          timer();
        }
        red=false;
        green=false;
        yellow = false;
        blue = true;
        county=6;
        k++;
        if(countYellow<53){
          mainplayground[0].children[yellowMoveArea[countYellow]].style.content = "url('Images/yellowtower.png')";
          mainplayground[0].children[borderNoneAreaYellow[2]].style.content = "url('')";
          if(positiony===positionr){
            countr=0;
            countR=0;
            countRed=0;
            intoRed=1;
            iRed=1;
            mainplayground[0].children[borderNoneAreaRed[2]].style.content = "url('Images/redtower.png')";
          }
          if(positiony===positiong){
            countg=0;
            countG=0;
            countGreen=0;
            intoGreen=1;
            iGreen=1;
            mainplayground[0].children[borderNoneAreaGreen[2]].style.content = "url('Images/greentower.png')";
          }
          if(positiony===positionb){
            countb=0;
            countB=0;
            countBlue=0;
            intoBlue=1;
            iBlue=1;
            mainplayground[0].children[borderNoneAreaBlue[2]].style.content = "url('Images/bluetower.png')";
          }
          setTimeout(function(){
            countYY.src="";
          }, 1500);
        }
        if(countYellow>53){
          countYellow = countYellow - countY;
          mainplayground[0].children[yellowMoveArea[countYellow]].style.content = "url('Images/yellowtower.png')";
        }
        if(countYellow===53){
          result.html('yellow win');
          county=0;
          countY=0;
          countYellow=0
          intoYellow=1;
          iYellow=1
        }
      }else{
        red = false;
        green = false;
        yellow=false;
        blue=true;
      }
  }
  function timer(){
    setTimeout(function(){
      result.html('');
    }, 1500);
  }
  //getting Data from localStorage
  redButton.html(localStorage.getItem('redPlayer'));
  greenButton.html(localStorage.getItem('greenPlayer'));
  yellowButton.html(localStorage.getItem('yellowPlayer'));
  // blueButton.html(localStorage.getItem('bluePlayer'));

  var randomdiceImg = [
    'Images/diceone.png',
    'Images/dicetwo.png',
    'Images/dicethree.png',
    'Images/dicefour.png',
    'Images/dicefive.png',
    'Images/dicesix.png'
  ]

  function randomImg(selector){
    var {itemVal, itemNum} = calcNumber(randomdiceImg);
    var img = $(selector)
    img[0].src=itemVal;
    img[0].id=itemNum;
    return(img[0]);
  }
});
