
import React, { Component } from "react";
import "./playtime.scss";
import ReactPlayer from "react-player";
import Button from "./button";

class Playtime extends Component {
  state = {
    playlists : [],
    list000 : [ // Favorites
      "https://youtu.be/qlpgtVk7KK8", // לצייר דברים חמודים
      "https://youtu.be/Oh1xNFsrMoA?t=36", // סביבון - רינת
      "https://youtu.be/1YGuDCHd2II", // mr bean
      "https://youtu.be/rdyfvoK_5oE?t=118", // עוגיות אותיות שוקולד
      "https://youtu.be/fYroo1oGsPY?t=31", // נגמלים ממוצץ - סופר נאני בריטית
      "https://youtu.be/QFnnG8Ap01g?t=5", // נגמלים מהמוצץ - רחוב סומסום
      "https://youtu.be/c4ULXXyvPRw?t=77", // איך מכינים סליים
      "https://youtu.be/iPBGS7QE8RQ", // שלתיאל קוואק
      "https://youtu.be/KiBX8Pm-dcQ", // חן מכינה לזניה
      "https://youtu.be/MWSCbncAGVU", // חן מכינה ספגטי
      "https://youtu.be/WUj59uaRODI?t=26", // איך אוכלים ספגטי
      "https://youtu.be/nffRwaTQZ7Q?t=105", // פרפר נחמד חביתה וסכום
      "https://youtu.be/v4eKxyawNcQ?t=34", // turn to butterfly
      "https://youtu.be/QwXK4e4uqXY", // lego cogs
      // "https://youtu.be/uh4dTLJ9q9o?t=4", // disney Lava song
      "https://youtu.be/GSTylmOHmDs", // japan 5m ad
      "https://youtu.be/cvCUGmteGFk", // japan gift wrap
      "https://youtu.be/xcgW3s-NBBI", // chipmank
      "RECOMMENDED__https://youtu.be/Km_pzL-MBno?t=3", // danceing Chandelier
      // "https://youtu.be/4WdwXldqvEk", // מכינים סוכה מנייר
      // "RECOMMENDED__https://youtu.be/ToKPl7_zyEg",// נועם עושה קקי 
      "https://youtu.be/mcXsadWb_lc", // מערבל בטון
      "https://www.youtube.com/watch?v=EXDDl6Lmezw&ab_channel=JohannesPre", // go kart
      "https://youtu.be/WCsFl7HaUtE?t=2", // blowfish
      "RECOMMENDED__https://youtu.be/mBkJ70_djh4?t=2", // austins butterfly - Ron Berger
      "https://youtu.be/3Dv7NINn-6w", // נועם ואבא מכינים חלה
      "https://www.youtube.com/watch?v=Iy9UkififOM&feature=youtu.be", // סבא מלמד למה חשוב לצחצח שיניים
      "https://youtu.be/pjlegfCCkL8?t=7", // הילי - רועי כפרי
      "https://youtu.be/N6a6EUvgSFQ?t=24", // תור ליאור - רועי כפרי
      "https://www.youtube.com/watch?v=b4kyH9sOcak", // מילים ואותיות
      "https://www.youtube.com/watch?v=aHKtdgt0yK0", // שברים
      "https://www.youtube.com/watch?v=opA_fBbZ_VI", // אם יוצאים מגיעים למקומות נפלאים
      "https://youtu.be/lpjj5TSDOl8?t=3", // יובל המבולבל - עוברים לתחתונים
      "https://www.youtube.com/watch?v=QCk8e7z8d3g" , // איך מכינים מחזור חיים של פרפר
      "https://youtu.be/9uhzxe6vWRM", // משלוח מסבתא סימה
      // "https://youtu.be/7z_HOf53XRs", // נועם מסדר את הבית
      // "https://youtu.be/P5hvXhV7Ces", // תאטרון פוצ׳יבובו - שתיל העגבניה
      // "https://www.youtube.com/watch?v=lzkn1kW5Ib0", // מדינות ויבשות בעולם
      
      // "https://www.youtube.com/watch?v=logvS11RJDM", // מערכת השמש
      
      "https://youtu.be/aYDeb6f6IZg?t=24", // זחל
      
      // "https://www.youtube.com/watch?v=1tWLDhJ6mjQ&list=PLEORbxn3jmrMsOWqTBKGNhuU5AMGCmOiE" , // ציפור מאכילה גוזלים
      // "https://youtu.be/2d9DvhlS1IE?t=30", // משאית זבל tutitu
      "https://youtu.be/iSQOmyWWAPk", // כבאי
      // "https://www.youtube.com/watch?v=2lLGmRj3_MA", // בים בם בום
      // "https://www.youtube.com/watch?v=9bZkp7q19f0", // gangam style
      
      
      "https://youtu.be/bo2tPbgJc4I?t=38", // כבאי מלמד איך מכבים אש
      // "https://youtu.be/QiGQUUi0pD8?t=6", // איך עושים ג׳גלינג
      // "https://www.youtube.com/watch?v=7LWXrx8Uo6w", // ״רכבת ההפתעות״
      // "https://www.youtube.com/watch?v=tCuppoTSNOY", // ״כבר סידרנו הרכבת״
      // "https://youtu.be/FX20kcp7j5c?t=9", // baby shark
      
      // "https://www.youtube.com/watch?v=kn9ryAm3kaI", // מיץ פטל
      // "https://www.youtube.com/watch?v=RrMQzGZDyqE", // "פינוקיו שיר פתיחה" 
      // "https://youtu.be/0A0WhTkY_i8?t=11", // ״הזחל הרעב״
      // "https://youtu.be/Mvp1H9p7do0?t=3", // שובבים במיטה
      
      
      // "https://www.youtube.com/watch?v=ShuuYycQE_I", // חמישה בלונים
      
      // "https://youtu.be/BNjZKKOFMNg", // פינוקיו מלמד לספור עד 10
      "https://youtu.be/zrFY-wiCxNk?t=22", // תאו תאו פרק א׳׳
      
    ],
    // list000 : [ // Favorites
    // ],
    list001 : [ // Songs & clips
      "https://youtu.be/1cB4HtK5JYE", // סביבון סוב סוב סוב
      "https://youtu.be/uh4dTLJ9q9o?t=4", // disney Lava song
      "https://youtu.be/mrh2R6cp-es?t=77", // שיר אותיות עיפרון
      "https://youtu.be/E-GI7prZGnI?t=6", // שיר אותיות פוסטר
      "https://youtu.be/XtDIFvN05oc?t=3", // א אוהל
      "https://youtu.be/am2KjGG3cXo", // אותיות למתקדמים
      "https://youtu.be/RsSq8lM_xvc", // שיר מוגלי
      "https://youtu.be/RMBabMAcAYE",// היפה והחיה שיר
      "https://youtu.be/OyfL37wq4Ck",// פו הדוב שיר
      "https://youtu.be/RrMQzGZDyqE",// פינוקיו שיר פתיחה
      "RECOMMENDED__https://youtu.be/WvAr9umnZ54?t=5",// Joe Cocker - You Are So Beautiful
      "https://www.youtube.com/watch?v=K3Y7VRytZaM", // מלך האריות - הקונה מטטה
      "https://youtu.be/hMVx4rgRXbw?t=6", // צפרדע ירוקה
      "https://www.youtube.com/watch?v=t97aWRqzPhA", // גן סגור
      "https://www.youtube.com/watch?v=Acqi8UL4SRc&t=15s", // סוס לבן
      "https://www.youtube.com/watch?v=s7R4geldEy8&t=4s", // הצפרדע קווה קווה קווה
      "https://www.youtube.com/watch?v=m2uTFF_3MaA", // yellow submarine
      "https://www.youtube.com/watch?v=73lj5qJbrms", // all together now
      "https://youtu.be/KaeBkH77oqU", // רועי כפרי - אתה נכנס לחלום
      "https://youtu.be/GAA0jtcalZM?t=3", // הכל אני יכול בחופש הגדול
      "https://youtu.be/yfZBO3SZrpE?t=3", // אצא לי השוקה
      "https://www.youtube.com/watch?v=R2dyJ3pA8mA", // טוליק
      // "https://youtu.be/Mvp1H9p7do0?t=3", // שובבים במיטה
      "https://youtu.be/yoIlgMwjR40?t=3", // אליעזר והגזר
      "https://youtu.be/6CMUbbJY2Yc?t=3", // ברווזיים לסבתא של אפריים
      // "https://www.youtube.com/watch?v=kjxSCAalsBE", // The 5th Dimension Age of Aquarius 1969
      // "https://www.youtube.com/watch?v=rKfqGI-fNAc", // דובים
      "https://youtu.be/bKj1FFqZLz4?t=3", // בערוגת הגינה
      "https://www.youtube.com/watch?v=7LWXrx8Uo6w", // ״רכבת ההפתעות״
      "https://www.youtube.com/watch?v=tCuppoTSNOY", // ״כבר סידרנו הרכבת״
      // "https://www.youtube.com/watch?v=bV9RE9XQ-e0", // בום בום בום
      "https://youtu.be/hUK21JN8JX8?t=25", //  איך שיר נולד
      // "https://www.youtube.com/watch?v=2_0EKcWOJ-0", // אבא בא
      // "https://www.youtube.com/watch?v=KeiCTmqMyvs", // שיר הפרדס
      // "https://www.youtube.com/watch?v=-2qc4RSqu3A",// בינבה
      // "https://www.youtube.com/watch?v=HA9ISkl9bzA", // פרפר נחמד
      // "https://www.youtube.com/watch?v=qKviBmkbjTE&t=5", //עשר אצבעות
    ],
    list002 : [ // Videos
    "https://youtu.be/DGFu1V-Ayuc", // טוב טוב הגמד
    "https://youtu.be/Rrbkur70Sbg" , // בלי סודות
    "https://youtu.be/0A0WhTkY_i8?t=11", // ״הזחל הרעב״
    "https://youtu.be/EvU1EzELJI8", // דני שובבני
    "https://www.youtube.com/watch?v=kn9ryAm3kaI", // מיץ פטל
      
      // "https://www.youtube.com/watch?v=Gj6V-xZgtlQ&list=PLRza9ng-gU7xKHgkttUffXAkvhrv_ydqf&ab_channel=RadioFlyer", // disney short
      // "https://www.youtube.com/watch?v=UJrbfrIkzM4&ab_channel=DisneyIsrael", // disgust - inside out
      // "https://www.youtube.com/watch?v=-Ghn9qCJWOY&ab_channel=DisneyIsrael", // anger - inside out
      // "https://www.youtube.com/watch?v=GhMbB9NbWJk&ab_channel=DisneyIsrael", // fear - inside out
      // "https://www.youtube.com/watch?v=AJBD05u-c74&ab_channel=DisneyIsrael", // sadness - inside out
      // "https://www.youtube.com/watch?v=1eFGM2WtzWk&ab_channel=DisneyIsrael", // happy - inside out
      // "https://www.youtube.com/watch?v=3s0LTDhqe5A&ab_channel=Netflix", // octupus teacher
      // "https://youtu.be/rr-xPzpdaMU", // פיטר פן עפים
      "RECOMMENDED__https://youtu.be/Me3qzAODv2o", // כספיון
      // "https://www.youtube.com/watch?v=Z28WNCv6ZQg&ab_channel=Cinemaisrael", // הכל בראש
      // "https://www.youtube.com/watch?v=4FZUnGijlIs", // finding nemo trailer
      // "https://www.youtube.com/watch?v=wnD49ttee7A", // nemo מדובב
      "https://youtu.be/H0oaceFjnYg", // הארנב והצב - הדס מספרת
      "https://www.youtube.com/watch?v=YX1MsP7aRvo", // Robot gripper 5b
      "https://www.youtube.com/watch?v=kPtWqolcnCY", // 3D Printed Parallel Jaw Gripper
      "https://www.youtube.com/watch?v=dNJdJIwCF_Y",  // פז גוואקמולי
      "https://www.youtube.com/watch?v=uXATjvr_rl4", // תינוקות גונבים מוצץ
      "https://www.youtube.com/watch?v=iNh8B1p5yg4&feature=youtu.be", // יובל המבולבל - עם מקס
      "https://youtu.be/6mtKGvrlZ4c?t=5", // פילים
      "https://youtu.be/m0TLJVdNKGg?t=26", // לא רעב ולא אוהב
      "https://www.youtube.com/watch?v=lDTq5ONPbaY&t=13s&ab_channel=ErenDa%C5%9Fik", // צרלי ולולה - ארנולד
      
      // "https://youtu.be/7z_HOf53XRs", // נועם מסדר את הבית
      // "https://www.youtube.com/watch?v=ShuuYycQE_I", // חמישה בלונים
      "https://youtu.be/L9BZWszbpiM?t=15", // לקוף יש בעיה
      
      
      "https://youtu.be/zrFY-wiCxNk?t=22", // תאו תאו פרק 1
      "https://youtu.be/01P1p99Fw0k?t=209", // טאו טאו - צרצר והנמלה
      
      // "https://youtu.be/DyZIJ1v5cLE?t=33", // לולי צבע סגול
      // "https://youtu.be/gTbKxdZo3vU?t=187", // לולי צבע ירוק
      // "https://youtu.be/XvDksLS2ce0?t=60", // החנות של מופוטופ - כובע חשיבה
      // "https://youtu.be/lDTq5ONPbaY?t=65", // צארלי ולוה - עכביש
      
      // "https://www.youtube.com/watch?v=u2dY6rZVLy8" , //tiger
      // "https://youtu.be/DGFu1V-Ayuc?t=130", // טוב טוב הגמד - 12
      // "https://www.youtube.com/watch?v=B-jHJdJ1hg4", // pez game over
      // "https://www.youtube.com/watch?v=qBjLW5_dGAM",  // פז פסטה
      // "https://www.youtube.com/watch?v=VQTVrxj4l6o&t=9",  // צפרדעים
      
    ],
    list003 : [ // Learn something new
      "https://youtu.be/3LYKgLItYeE", // מכינים סביבון
      // "https://youtu.be/4WdwXldqvEk", // מכינים סוכה מנייר
    "https://www.youtube.com/watch?v=tRFa6MP27Iw&ab_channel=ErenDa%C5%9Fik",// החיים
    "https://www.youtube.com/watch?v=t7fkR_9ti4g&ab_channel=GiladPelossof", // עונות השנה
      "https://youtu.be/w77zPAtVTuI?t=2",// plant timelapse
      // "RECOMMENDED__https://youtu.be/mBkJ70_djh4?t=2", // austins butterfly - Ron Berger
      "https://youtu.be/ZNjPlmnOsBc?t=43", // גננת וילדים בונים את מערכת השמש מפלסטלינה
      "https://youtu.be/YaAosUVNyoU?t=12",// ילדי גן משחקים בחצר
      "RECOMMENDED__https://youtu.be/5Dctj2_YnEg?t=15", // איך מכינים פנקייק
      "RECOMMENDED__https://www.youtube.com/watch?v=-OixYtzdFQk", // איך צוללים בבריכה
      "https://youtu.be/r3bjy7Vmr7w?t=11", // מתכון לחלה של ארז
      "https://www.youtube.com/watch?v=WMxAph_en4c", // ילדות מכינות גבס
      "https://www.youtube.com/watch?v=QCk8e7z8d3g" , // איך מכינים מחזור חיים של פרפר
      "https://www.youtube.com/watch?v=CSwNIH4CfeY", // דינוזאורים
      "https://www.youtube.com/watch?v=VjINuQX4hbM",  // חותכים פירות
      "https://www.youtube.com/watch?v=pFNkQibY2sU&t=4s", // make Peanut butter
      // "RECOMMENDED__https://youtu.be/BNjZKKOFMNg", // פינוקיו מלמד לספור עד 10
      
      
      "https://www.youtube.com/watch?v=lzkn1kW5Ib0", // מדינות ויבשות בעולם
      "https://www.youtube.com/watch?v=aHKtdgt0yK0", // שברים
      "https://www.youtube.com/watch?v=logvS11RJDM", // מערכת השמש
      
      // "https://youtu.be/lpjj5TSDOl8?t=3", // יובל המבולבל - עוברים לתחתונים
      
      "https://youtu.be/PVCvC18_QXE?t=3", // אומרים שלום למוצץ - ג׳ינגי
      
      "https://youtu.be/FEQH-zhcfdg?t=94", // play doh kitchen set
      
      
      // "https://www.youtube.com/watch?v=CmWZnVXZe4g", // crab
      // "https://www.youtube.com/watch?v=ioblgpA5eTo", // zikit
      "https://youtu.be/pxuBwfNp2wk?t=39", // דיונון צהוב קטן
      // "https://www.youtube.com/watch?v=CpK1lZJmbJY", // panda cub
      // "https://www.youtube.com/watch?v=-Hd10qvWgko", // גיבון
      // "https://youtu.be/ahC3YHWuR-A?t=52", // מגנטים
      // "https://www.youtube.com/watch?v=L0D6Le3Bf3Q",  // חילזון
      // "https://www.youtube.com/watch?v=OjfjELmuvW8", // skunks family      
    ],
    list005 : [ // Dance!
      // "https://youtu.be/12pwBTQzNLg?t=9", // Freestyle Popping -- Dancing
      "RECOMMENDED__https://youtu.be/Km_pzL-MBno?t=3", // danceing Chandelier
      "https://www.youtube.com/watch?v=I8uMcxNdDaU", // לזוז - אין דן דינו
      "https://www.youtube.com/watch?v=2vjPBrBU-TM", // Sia - Chandelier (Official Music Video)
      "https://www.youtube.com/watch?v=M0quXl_od3g", // ride on time - האישה הצועקת
      "https://www.youtube.com/watch?v=xmbmfDeEG-g", // כל הילדים קופצים רוקדים
      "https://www.youtube.com/watch?v=sLSpXaokFkc", // Hold Still - Yo Gabba Gabba!
      "https://www.youtube.com/watch?v=FTQbiNvZqaY", // africa song - tito
      "https://www.youtube.com/watch?v=-pwYHx28vBg", // Brucy - חייב חברה
      "https://www.youtube.com/watch?v=6Os-CACRwM8", // party in my tummy
      "https://youtu.be/FX20kcp7j5c?t=9", // baby shark
      "https://www.youtube.com/watch?v=ymigWt5TOV8", // kids zumba
    ],
    listArchive : [
      "https://youtu.be/8floUAzPbhg", // מיכל מלמדת את הילדים על סוכה
      "https://youtu.be/oye4dPkkkKk", // תהל מספרת לילדים סיפור
      "https://www.youtube.com/watch?v=f7wWU7lzN3Q", // שיר האותיות
      // "https://www.youtube.com/watch?v=IZ0kbm_rwd4&list=RDIZ0kbm_rwd4&start_radio=1", // frozen playlist
      "https://www.youtube.com/watch?v=JJzZNPy1yZU", // בלי סודות
      "https://www.youtube.com/watch?v=K3Y7VRytZaM", // שיר ג׳ונגל
      "https://www.youtube.com/watch?v=KMMR2-qD_6Y", // גינה לי
      "https://www.youtube.com/watch?v=VT1R37o-d3I&t=3",  // צבעים התבלבלו
      "https://www.youtube.com/watch?v=T-kozagoRfY&t=5",  // עכביש קטן
      "https://www.youtube.com/watch?v=Su4Gv-cwpWI",  // אני תמיד נשאר אני
      "https://youtu.be/pNmI5WDweyU?t=3", // לאבא שלי יש סולם
      "https://vimeo.com/58659769", // the scared is scared
      "https://youtu.be/5F7wsbvfcEA?t=6", // moose
      "https://www.youtube.com/watch?v=JO0I7v1dYmc", // make pizza
      "https://www.youtube.com/watch?v=4bb3alO6w-Y", // חן מכינה פיצה
      "https://www.youtube.com/watch?v=HAmqycpOHrM",  // ברווזים
      "https://www.youtube.com/watch?v=5IaYm3NjJnM", // wolf crying
      "https://www.youtube.com/watch?v=VlPdfLr1FSo?t=7", // girl sings elvis wise man say
    ],
    categories : [
      // "Favorites", "Songs & clips", "Videos", "Learn something new", "Bialik Songs", "Dance!"
      "חדשים", "שירים", "סרטים", "ללמוד משהו חדש", "סרטי משפחה", "לרקוד"
    ],
    url: "",
    pip: false,
    playing: false,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    playsinline: true,
    rightMenu: true,
    mouseOverVideo : false,
    hideControlsCountStarted : false,
    mouseMovingOverVideo : false,
    editMode : false,
    fullscreen: false,
    playedSeconds: 0,
    playTimeOver : false,
    playTimeCountdownON : false,
    playTimeCountdown : "",
    countDownCloseToFinish : false,
    countDownLastMinute : false,
  };

  componentDidMount(){
    document.addEventListener("keydown", this.checkKey);
    this.load(this.state.list000[0])
    this.handlePause(); 
    document.addEventListener('gesturestart', function (e) {
      e.preventDefault();
    });

    function setWindowSize(){
      var w = document.documentElement.clientWidth;
      var h = document.documentElement.clientHeight;
      document.body.style.width = w;
      document.body.style.height = h;
      }   
      setWindowSize();

  }

  componentWillUnmount() {
    document.addEventListener("keydown", this.checkKey);
  }

  load = url => {
    this.setState({
      url,
      playing: 1,
      played: 0,
      loaded: 0,
      pip: false,
    });
  };
  handleHideControlsTimeout = () => {
    var element = document.getElementById("overlay");
    var timeout = setTimeout(() => {  
      this.setState({mouseMovingOverVideo : false})
      if (this.state.playing){
        element.classList.add("opacityFalse")
        element.classList.add("cursorFalse")
        element.classList.add("fade-out")
        element.classList.remove("fade-in")
      }
    },3000)
  }

  handleMouseMoveOverVideoTimout = () => {
    var element = document.getElementById("overlay");
    if (!this.state.mouseMovingOverVideo && this.state.playing){
      // mouse move stopped
      this.setState({mouseMovingOverVideo : true})
      this.handleHideControlsTimeout()
    }else {
      // mouse moving
      if (this.state.playing){
        element.classList.remove("opacityFalse")
        element.classList.remove("fade-out")
        element.classList.remove("cursorFalse")
        element.classList.add("fade-in")
      }
    }
  }

  addOverlayTimeout = () => {
    if (!this.state.hideControlsCountStarted && this.state.playing){
      var element = document.getElementById("overlay");
      element.classList.remove("opacityFalse")
      element.classList.remove("fade-out")
      element.classList.remove("cursorFalse")
      element.classList.add("fade-in")
      this.setState({ hideControlsCountStarted : true })
      setTimeout(() => {
        this.setState({ hideControlsCountStarted : false });
        element.classList.add("opacityFalse")
        element.classList.add("cursorFalse")
        element.classList.add("fade-out")
        element.classList.remove("fade-in")
      }, 3000);     
    }
  }

  removeOverlayTimeout = () => {
    var element = document.getElementById("overlay");
    element.classList.remove("opacityFalse")
    element.classList.remove("fade-out")
    element.classList.remove("cursorFalse")
    element.classList.remove("fade-in")
  }
  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing });
    this.handleFadeOutMainIcon();  
  };

  handleReplay = () => {
    this.setState({ playing: true });
    var seekto = this.state.url.split("?t=")[1]
    if (seekto){
      this.player.seekTo(seekto);  
    }else{
      this.player.seekTo(0);
    }
  };
  
  handleJumpForward = () => {
    const jumpTime = 3;
    this.player.seekTo(this.state.progress + jumpTime)
    this.setState({progress: this.state.progress + jumpTime})
    // alert("jumping to: " + this.state.progress + jumpTime)
  }
  handleJumpBackwards = () => {
    const jumpTime = -3;
    this.player.seekTo(this.state.progress + jumpTime)
    this.setState({progress: this.state.progress + jumpTime})
    // alert("jumping to: " + this.state.progress + jumpTime)
  }

  handleFadeOutMainIcon = () => {
    var element = document.getElementById("overlay__main-icon");
    element.classList.remove("fade-in-out");
    void element.offsetWidth;
    element.classList.add("fade-in-out");
  }
  handleStop = () => {
    this.setState({ url: null, playing: false });
  };
  handleToggleControls = () => {
    const url = this.state.url;
    this.setState(
      {
        controls: !this.state.controls,
        url: null
      },
      () => this.load(url)
    );
  };

  handleToggleLight = () => {
    this.setState({ light: !this.state.light });
  };

  handleToggleLoop = () => {
    this.setState({ loop: !this.state.loop });
  };

  handleVolumeChange = e => {
    this.setState({ volume: parseFloat(e.target.value) });
  };

  handleToggleMuted = () => {
    this.setState({ muted: !this.state.muted });
  };

  handleSetPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) });
  };

  handleTogglePIP = () => {
    this.setState({ pip: !this.state.pip });
  };

  handlePlay = () => {
    console.log("onPlay");
    this.setState({ playing: true, rightMenu : false });
    this.handleHideControlsTimeout()
  };

  handleEnablePIP = () => {
    console.log("onEnablePIP");
    this.setState({ pip: true });
  };

  handleDisablePIP = () => {
    console.log("onDisablePIP");
    this.setState({ pip: false });
  };

  handlePause = () => {
    console.log("onPause");
    this.setState({ playing: false });
    this.removeOverlayTimeout();
  };

  handleSeekMouseDown = e => {
    this.setState({ seeking: true });
  };

  handleSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) });
  };

  handleSeekMouseUp = e => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  };

  handleProgress = event => {
    if (!this.state.seeking) {
      this.setState({
        state : event, 
        progress: event.playedSeconds
       });
    }
  };

  handleEnded = () => {
    console.log("onEnded");
    this.setState({ playing: false });
    this.handleFadeOutMainIcon();
    this.player.seekTo(0);
  };

  handleDuration = duration => {
    console.log("onDuration", duration);
    this.setState({ duration });
  };

  handleClickFullscreen = () => {
    this.setState({ fullscreen: !this.state.fullscreen });
    if(!this.state.fullscreen){
      document.getElementById("tofu").requestFullscreen()
    }else{
      document.exitFullscreen();
    }
  };

  handleRightMenu = () => {
    this.setState({rightMenu : !this.state.rightMenu})
  };
  
  scrollUpRightMenu = () => {
    document.getElementById("tofu__rightMenu--list").scrollTop=0;
  };
  
  handleEditMode = () => {
    this.setState({editMode : !this.state.editMode});
    if(this.state.editMode){
      this.setState({rightMenu : true});
      this.handlePause();
      this.setState({ state: this.state });
    };
  }
  handleEditTitle = (categoryName) => {
    var index = this.state.categories.indexOf(categoryName);
    var input = prompt("Title Name", categoryName);
    const categories = this.state.categories;
    if (input !== null || input !== "" || input !== categoryName) {      
      categories[index] = input;
      this.setState({ categories })
    }
  }
  handleAddVideo = (listName) => {
    var url = [];
    var input = prompt("Add a video:", "Enter URL");
    if (input == null || input == "" || input == "Enter URL") {
    } else {
      var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
      var match = input.match(regExp);
      if (match && match[2].length == 11) {
        url = input;
        this.setState({[listName] : this.state[listName].concat(url)})
        this.load(url);
        this.setState({ state: this.state });
      }
    }    
  };

  handlePlayTime = () => {
    var input = prompt("How long would you like to play (in minutes)?", 30);
    const timeCloseToFinish = 5;
    if (input === null) {
      return;
  }else{
    if (isNaN(input)){
      return;
    }
    if (input !== null || input !== "" || input !== "NaN") {  
      var input = parseInt(input);
      alert("PlayTime set to " + input + " minutes")
      var seconds = input * 60;
      this.setState ({ playTimeCountdownON : true })
      setInterval(()=>{ 
        seconds -= 1;
        var minutes = Math.ceil(seconds / 60);
        this.state.countDownLastMinute ? (this.setState({ playTimeCountdown : seconds})) : (this.setState({ playTimeCountdown : minutes + "m"}));
        if (minutes <= timeCloseToFinish && !this.state.countDownCloseToFinish){
          // alert("Countdown close to finish") 
          this.setState({countDownCloseToFinish : true})
        }
        if (minutes <= 1 && !this.state.countDownLastMinute){
          this.setState({ countDownLastMinute : true});
        }
        if (minutes <= 0 && !this.state.playTimeOver){
          alert("playtime over!")
          this.setState({ playTimeOver : true});
        }
        }, 1000);
    }
  }

  
  }
  handlePlayTimeOver = () => {
    this.handlePause();
    this.setState({playTimeOver : true })
  }

  handleArchiveVideo = (url, listName) => {
    const index = this.state[listName].indexOf(url);
    if (index > -1) {
      this.state[listName].splice(index, 1);
      this.state.listArchive.unshift(url);
    }
    this.setState({ state: this.state });
  };

  checkKey = (e) => {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        alert("up arrow")
    }
    else if (e.keyCode == '40') {
        // down arrow
        alert("down arrow")
    }
    else if (e.keyCode == '37') {
       // left arrow
       this.handleJumpBackwards()
    }
    else if (e.keyCode == '39') {
       // right arrow
       this.handleJumpForward()
       
    }
    else if (e.keyCode == '32') { //spacebar
      this.handlePlayPause();
   }
}
  renderVideoThumbnail = (url, label, index ,listName) => {
    return (
      <div key={index} className="tofu__list--item">
        <div className={"tofu__list--item--container " + (this.state.editMode ? "wiggle" : "") + (this.checkRecommended(url) ? "tofu__list--item--recommended" : "")}  onClick={() => this.load(url)}>{label}
          <img 
            className="rounded-corners"
            alt={index}
            src={
              "https://img.youtube.com/vi/" +
              this.getVideoID(url) +
              "/mqdefault.jpg"
            }
          />
        </div>
        <div className={"tofu__list--item--deleteBtn " + (this.state.editMode ? " " : "displayNone")} onClick={() => this.handleArchiveVideo(url, listName)}></div>
      </div>
    )
  }
  renderList = (list, categoryName, colorClass , listName) => {
    var isArchive = false; 
    if(categoryName == "Archive"){
        isArchive = true;
      }
    return (
      <div className={"tofu__rightMenu--list " + colorClass + (isArchive && !this.state.editMode ? " displayNone" : " ")}>  
        <div className="tofu__rightMenu--list--title-container">
          <h2 className="tofu__rightMenu--list--title">{categoryName}</h2>      
          <div className={"controls__btn controls__btn--pencil tofu__rightMenu--list--btn " + (this.state.editMode ? "fade-in" : "displayNone")} onClick={() => this.handleEditTitle(categoryName, listName)} ></div>
        </div>  
        <div className="tofu__rightMenu--list--container">
        <div className="tofu__list--item">
          <div className="tofu__list--item--holder"></div>
        </div>
          
          {list.map((url, index) => (
            this.renderVideoThumbnail(list[index], "", index, listName)
            ))
          }
          <div className="tofu__list--item">
            <div className={"controls__btn controls__btn--plus tofu__list--item--container tofu__list--item--plus " + (this.state.editMode ? "fade-in" : "displayNone")} onClick={() => this.handleAddVideo(listName)} ></div>
            <div className="tofu__list--item--holder"></div>
          </div>
          
        </div>
      </div>
    )
  }

  checkRecommended = (url) => {
    if(url.includes("RECOMMENDED__")){
      // alert(url + " is Recommended!")
      return true
    }
  }
  getVideoID = (video) => {
    video = video.replace("RECOMMENDED__", "")
    if(video.includes("youtube.com")){
      var videoID = "";
      videoID = video.slice("https://www.youtube.com/watch?v=".length);
      videoID = videoID.split("&")[0];
      videoID = videoID.split("?t=")[0];
      return videoID;
    }else{
      if(video.includes("youtu.be")){
        var videoID = "";
        videoID = video.slice("https://youtu.be/".length);
        videoID = videoID.split("&")[0];
        videoID = videoID.split("?t=")[0];
        return videoID;
      }
    }
  } 

  ref = player => {
    this.player = player;
  };

  overlayMainVideo = () => {
    return (
      <div>
        <div id="overlay" className={" " + (this.state.playing ? "showOnHover " : "")} onMouseMove={this.handleMouseMoveOverVideoTimout}>
          <div className={"overlay__bg " + (this.state.playing ? "" : "overlay__bg--pause")} onClick={this.handlePlayPause}></div>
          <div className="overlay__header">
            <div className={"logo__container " + (this.state.countDownCloseToFinish ? "wiggle" : "") } onClick={this.handlePlayTime}>
              <div className="logo__symbol">
                <div className={"logo__symbol--play-icon " + (this.state.playTimeCountdownON ? "displayNone" : "" )}></div>
                <p id="logo__symbol--countdown" className={(this.state.playTimeCountdownON ? "" : "displayNone" )}>{this.state.playTimeCountdown}</p>
              </div>
              <h1>PlayTime</h1>
            </div>
            <div className="controls__btn controls__btn--fullscreen controls__btn--no-bg controls__btn--no-padding " onClick={this.handleClickFullscreen}></div>
          </div>
          <div id="overlay__main-icon" className="iconVideoBabu iconVideoBabu__L fade-in-out shape-nonagon" onClick={this.handlePlayPause}>
            <div className={"iconVideoBabu__icon " + (this.state.playing ? "shape-play" : "shape-pause")}></div>
          </div>
          <div className="overlay__bottom">
            <div className="controls__btn controls__btn--medium controls__btn--replay " onClick={this.handleReplay}></div>
            <div className="overlay__bottom--center-container">
              <div className="controls__btn controls__btn--jump-backwards controls__btn--tiny shape-circle" onClick={this.handleJumpBackwards}></div>
              <div className={"controls__btn nonagon-shape " + (this.state.playing ? "controls__btn--pause" : "controls__btn--play")} onClick={this.handlePlayPause}></div>
              <div className="controls__btn controls__btn--jump-forward controls__btn--tiny shape-circle" onClick={this.handleJumpForward}></div>
            </div>
            <div className={"controls__btn controls__btn--arrow shape-circle " + (this.state.rightMenu ? "" : "flip-vertical")} onClick={this.handleRightMenu}></div>
          </div>
        </div>
      </div>
    )
  };
  
  render() {
    const {
      url,
      playing,
      controls,
      light,
      volume,
      muted,
      loop,
      played,
      loaded,
      duration,
      playbackRate,
      pip
    } = this.state;
    const SEPARATOR = " · ";
    return (
      <div>
        <div id="playTimeOver" className={this.state.playTimeOver ? " " : "displayNone" }>
          <div className="playTimeOver__container">
            <div className="frog-container"><div className="frog"></div></div>
            <h1>PlayTime is Over!</h1>
            <Button
              isLink={true}
              to={{
                pathname: `/mytime`,
              }}
              text="MyTime"
            /> 
          </div>
            
        </div>
        <div id="tofu" className={this.state.playTimeOver ? "displayNone" : "" }>
          <div className="tofu__container">
            <div id="tofu__video">
              <div className="tofu__video--player" >            
              {this.overlayMainVideo()}
                <div className="player-wrapper">
                  <ReactPlayer
                    ref={this.ref}
                    className="react-player"
                    width="100%"
                    height="100%"
                    url={url}
                    pip={pip}
                    playing={playing}
                    controls={controls}
                    light={light}
                    loop={loop}
                    playbackRate={playbackRate}
                    volume={volume}
                    muted={muted}
                    // onReady={() => console.log("onReady")}
                    // onStart={() => console.log("onStart")}
                    onPlay={this.handlePlay}
                    onEnablePIP={this.handleEnablePIP}
                    onDisablePIP={this.handleDisablePIP}
                    onPause={this.handlePause}
                    // onBuffer={() => console.log("onBuffer")}
                    // onSeek={e => console.log("onSeek", e)}
                    onEnded={this.handleEnded}
                    // onError={e => console.log("onError", e)}
                    onProgress={this.handleProgress}
                    onDuration={this.handleDuration}
                    playsinline = {this.playsinline}
                  />
                </div>
              </div>
            </div>
            <div className={"tofu__rightMenu fade-in " + (this.state.rightMenu ? "" : "hide")}>
              <div className="tofu__rightMenu--nav">
                <div className={"controls__btn controls__btn--edit " + (this.state.editMode ? "controls__btn--edit--on" : "controls__btn--edit--off")} onClick={this.handleEditMode} ></div>
              </div>
              <div className={"tofu__rightMenu--lists"}>
                {this.renderList(this.state.list000, this.state.categories[0], "rightMenu__list--yellow" , "list000")}
                {this.renderList(this.state.list001, this.state.categories[1], "rightMenu__list--orange" , "list001")}
                {this.renderList(this.state.list002, this.state.categories[2], "rightMenu__list--red" , "list002")}
                {this.renderList(this.state.list003, this.state.categories[3], "rightMenu__list--purple" , "list003")}
                {this.renderList(this.state.list005, this.state.categories[5], "rightMenu__list--green" , "list005")}
                {this.renderList(this.state.listArchive, "Archive", "rightMenu__list--black" , "listArchive")}
              </div>
            </div>
          </div>
        </div>
        {(function() {
          document.body.style.backgroundColor = "black";
          document.body.style.position = "fixed";
        })()}
      </div>
    );
  }
}


// export default hot(module)(App);
export default Playtime;