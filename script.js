
const audio = [document.querySelector('.audio0'),document.querySelector('.audio1'),document.querySelector('.audio2'), document.querySelector('.audio3')]
const  buttonPlay = [document.querySelector('#btn_0'),document.querySelector('#btn_1'), document.querySelector('#btn_2'), document.querySelector('#btn_3')]
const  buttonPause = [document.querySelector('#btn_0_pause'),document.querySelector('#btn_1_pause'), document.querySelector('#btn_2_pause'), document.querySelector('#btn_3_pause')]
const body = document.querySelector('body')
const main = document.querySelector('main')
const IncoMode = document.querySelector('.icon_mode')
const descript =[ document.querySelector('#descript0'), document.querySelector('#descript1'), document.querySelector('#descript2'),document.querySelector('#descript3')]
const bannerImg = [document.querySelector('#bannerImg0'),document.querySelector('#bannerImg1'),document.querySelector('#bannerImg2'),document.querySelector('#bannerImg3')]
const iconImg = [document.querySelector('#iconImg0'), document.querySelector('#iconImg1'),document.querySelector('#iconImg2'), document.querySelector('#iconImg3') ]
const nameAuthor = [document.querySelector('#nameAuthor0'),document.querySelector('#nameAuthor1'),document.querySelector('#nameAuthor2'),document.querySelector('#nameAuthor3')]

const btn_trocar =[ document.querySelector('.btnVoltar'), document.querySelector('.bntAvasar')]

const logoImg = document.querySelector('#Logo')

class musicContainer {
  constructor(bannerImg, descript, iconImg, nameAuthor, music) {
    this.bannerImg = bannerImg
    this.descript = descript
    this.iconImg = iconImg
    this.nameAuthor = nameAuthor
    this.music = music

  }
}

const musicStored = [

   {content : new musicContainer('assets/banner_midoriya.svg', 'Rap do Midoriya (Boku No Hero) | Herói Número 1 | Basara','assets/icon_basara.svg','Basara','assets/MIdoriya.mp4')},

   {content : new musicContainer('assets/bannerMirko.svg', ' FELÍCIA ROCK - Rabbit Hero ( Mirko / Boku no Hero )','assets/Icon_Felicia.svg','Felícia Rock','assets/Mirko.mp4')},
  
   {content: new musicContainer('assets/Banner_mirioTogata.svg', '1 Milhão | Novatroop | Mirio Togata (Boku no Hero)','assets/icon_novatrop.svg','Novatroop','assets/mirio.mp4')},
  
   {content: new musicContainer('assets/banner_siboloPaz.svg', 'Taka - Símbolo da Paz [Remake] |Prod. @Khellvyn','assets/icon_Taka.svg','TakaB','assets/SimboloPaz.mp4')},
  
]

const musicStoredDark = [
  {content : new musicContainer('assets/banner_overhaul.svg', 'Revisão | Overhaul ( Boku no Hero ) | Enygma', 'assets/icon_enygma.svg','Enygma','assets/overhaul.mp4')},
  {content : new musicContainer('assets/banner_himiko.svg','Himiko Toga(Boku no Hero)OQUE ME FAZ TE AMAR | Felícia Rock','assets/Icon_Felicia.svg','Felícia Rock','assets/himiko.mp4')},
  {content : new musicContainer('assets/banner_gentle.svg', 'Malfeitor Gentil | Novatroop | Gentle Criminal (Boku no Hero)', 'assets/icon_novatrop.svg','Novatroop','assets/gentle.mp4')},
  {content : new musicContainer('assets/banner_schigaraki.svg','Shigaraki Tomura - O Símbolo do Mal (Boku no Hero) TK RAPS','assets/icon_tkRaps.svg','TK RAPS','assets/schigaraki.mp4')}
]

 
 
 
 






bannerImg[0].src = musicStored[0].content.bannerImg
iconImg[0].src = musicStored[0].content.iconImg
nameAuthor[0].innerHTML = musicStored[0].content.nameAuthor
descript[0].innerHTML = musicStored[0].content.descript
audio[0].src = musicStored[0].content.music

bannerImg[1].src = musicStored[1].content.bannerImg
iconImg[1].src = musicStored[1].content.iconImg
nameAuthor[1].innerHTML = musicStored[1].content.nameAuthor
descript[1].innerHTML = musicStored[1].content.descript
audio[1].src = musicStored[1].content.music

bannerImg[2].src =  musicStored[2].content.bannerImg
iconImg[2].src =  musicStored[2].content.iconImg
nameAuthor[2].innerHTML = musicStored[2].content.nameAuthor
descript[2].innerHTML = musicStored[2].content.descript
audio[2].src = musicStored[2].content.music

bannerImg[3].src = musicStored[3].content.bannerImg
iconImg[3].src = musicStored[3].content.iconImg
nameAuthor[3].innerHTML = musicStored[3].content.nameAuthor
descript[3].innerHTML = musicStored[3].content.descript
audio[3].src = musicStored[3].content.music




IncoMode.addEventListener('click',DarkMode)



function playMusic(){
  buttonPlay[0].addEventListener('click',()=>{ 
   audio[0].play();
  buttonPause[0].style = " display:block;"
  buttonPlay[0].style = "display:none;"
  })
  

buttonPlay[1].addEventListener('click',()=>{
  audio[0].pause();
  buttonPause[0].style = " display:none;"
  buttonPlay[0].style = "display:block;"

    audio[1].play();
    buttonPause[1].style = "display:block;"
  buttonPlay[1].style = "display:none;"

    })
    buttonPlay[2].addEventListener('click',()=>{
        
  audio[1].pause();
  buttonPause[1].style = " display:none;"
  buttonPlay[1].style = "display:block;"

        audio[2].play();
        buttonPause[2].style = " display:block;"
        buttonPlay[2].style = "display:none;"
        })
        buttonPlay[3].addEventListener('click',()=>{
          audio[2].pause();
          buttonPause[2].style = " display:none;"
          buttonPlay[2].style = "display:block;"

            audio[3].play();
            buttonPause[3].style = " display:block;"
            buttonPlay[3].style = "display:none;"
            })
       
   } 

  
   function pauseMusic(){
    
    buttonPause[0].addEventListener('click',()=>{
      audio[0].pause();
      buttonPlay[0].style = " display:block;"
      buttonPause[0].style = "display:none;"
  })
  buttonPause[1].addEventListener('click',()=>{
    audio[1].pause();
    buttonPlay[1].style = " display:block;"
    buttonPause[1].style = "display:none;"
})
buttonPause[2].addEventListener('click',()=>{
  audio[2].pause();
  buttonPlay[2].style = " display:block;"
  buttonPause[2].style = "display:none;"
})
buttonPause[3].addEventListener('click',()=>{
audio[3].pause();
buttonPlay[3].style = " display:block;"
buttonPause[3].style = "display:none;"
})
   }


function DarkMode(){

  body.classList.toggle('darkModeB')
  main.classList.toggle('darkModeArt')
  let IfDarkMode = body.classList == "darkModeB"

  if(IfDarkMode){

  IncoMode.src = 'assets/icon_sol.svg'
  logoImg.src = 'assets/logo_myVillain.svg'
  bannerImg[0].src = musicStoredDark[0].content.bannerImg
iconImg[0].src = musicStoredDark[0].content.iconImg
nameAuthor[0].innerHTML = musicStoredDark[0].content.nameAuthor
descript[0].innerHTML = musicStoredDark[0].content.descript
audio[0].src = musicStoredDark[0].content.music

bannerImg[1].src = musicStoredDark[1].content.bannerImg
iconImg[1].src = musicStoredDark[1].content.iconImg
nameAuthor[1].innerHTML = musicStoredDark[1].content.nameAuthor
descript[1].innerHTML = musicStoredDark[1].content.descript
audio[1].src = musicStoredDark[1].content.music

bannerImg[2].src =  musicStoredDark[2].content.bannerImg
iconImg[2].src =  musicStoredDark[2].content.iconImg
nameAuthor[2].innerHTML = musicStoredDark[2].content.nameAuthor
descript[2].innerHTML = musicStoredDark[2].content.descript
audio[2].src = musicStoredDark[2].content.music

bannerImg[3].src = musicStoredDark[3].content.bannerImg
iconImg[3].src = musicStoredDark[3].content.iconImg
nameAuthor[3].innerHTML = musicStoredDark[3].content.nameAuthor
descript[3].innerHTML = musicStoredDark[3].content.descript
audio[3].src = musicStoredDark[3].content.music
forwardBackDark()


    
  }else{

    IncoMode.src = 'assets/icon_lua.svg'
    logoImg.src = 'assets/logo_myHero.svg'
    bannerImg[0].src = musicStored[0].content.bannerImg
    iconImg[0].src = musicStored[0].content.iconImg
    nameAuthor[0].innerHTML = musicStored[0].content.nameAuthor
    descript[0].innerHTML = musicStored[0].content.descript
    audio[0].src = musicStored[0].content.music
    
    bannerImg[1].src = musicStored[1].content.bannerImg
    iconImg[1].src = musicStored[1].content.iconImg
    nameAuthor[1].innerHTML = musicStored[1].content.nameAuthor
    descript[1].innerHTML = musicStored[1].content.descript
    audio[1].src = musicStored[1].content.music
    
    bannerImg[2].src =  musicStored[2].content.bannerImg
    iconImg[2].src =  musicStored[2].content.iconImg
    nameAuthor[2].innerHTML = musicStored[2].content.nameAuthor
    descript[2].innerHTML = musicStored[2].content.descript
    audio[2].src = musicStored[2].content.music
    
    bannerImg[3].src = musicStored[3].content.bannerImg
    iconImg[3].src = musicStored[3].content.iconImg
    nameAuthor[3].innerHTML = musicStored[3].content.nameAuthor
    descript[3].innerHTML = musicStored[3].content.descript
    audio[3].src = musicStored[3].content.music

    forwardBack()
  }


}

function forwardBack(){
  let musicNumber = 0
  btn_trocar[1].addEventListener('click', ()=>{
    musicNumber++;
if (musicNumber > 3){
  musicNumber= 0
}


    
    buttonPause[0].style = " display:none;"
    buttonPlay[0].style = " display:block;"
  bannerImg[0].src = musicStored[musicNumber].content.bannerImg
  iconImg[0].src = musicStored[musicNumber].content.iconImg
  nameAuthor[0].innerHTML = musicStored[musicNumber].content.nameAuthor
  descript[0].innerHTML = musicStored[musicNumber].content.descript
  audio[0].src = musicStored[musicNumber].content.music
  
   });
  
   btn_trocar[0].addEventListener('click',()=>{
    musicNumber--;
    if(musicNumber< 0){
      musicNumber = 3
    }
 
    buttonPause[0].style = " display:none;"
    buttonPlay[0].style = " display:block;"
    bannerImg[0].src = musicStored[musicNumber].content.bannerImg
    iconImg[0].src = musicStored[musicNumber].content.iconImg
    nameAuthor[0].innerHTML = musicStored[musicNumber].content.nameAuthor
    descript[0].innerHTML = musicStored[musicNumber].content.descript
    audio[0].src = musicStored[musicNumber].content.music
    
  
   });
  
}

function forwardBackDark(){
 
  let musicNumber = 0
 
    btn_trocar[1].addEventListener('click', ()=>{
      musicNumber++
      if (musicNumber > 3){
        musicNumber = 0
      }
        buttonPause[0].style = " display:none;"
    buttonPlay[0].style = " display:block;"
    bannerImg[0].src = musicStoredDark[musicNumber].content.bannerImg
    iconImg[0].src = musicStoredDark[musicNumber].content.iconImg
    nameAuthor[0].innerHTML = musicStoredDark[musicNumber].content.nameAuthor
    descript[0].innerHTML = musicStoredDark[musicNumber].content.descript
    audio[0].src = musicStoredDark[musicNumber].content.music
    
      
  
    });

    btn_trocar[0].addEventListener('click',()=>{
      musicNumber--;
      if(musicNumber < 0){
        musicNumber = 3
      }
      buttonPause[0].style = " display:none;"
      buttonPlay[0].style = " display:block;"
      bannerImg[0].src = musicStoredDark[musicNumber].content.bannerImg
      iconImg[0].src = musicStoredDark[musicNumber].content.iconImg
      nameAuthor[0].innerHTML = musicStoredDark[musicNumber].content.nameAuthor
      descript[0].innerHTML = musicStoredDark[musicNumber].content.descript
      audio[0].src = musicStoredDark[musicNumber].content.music

   });
}
forwardBack()
playMusic()
pauseMusic()



