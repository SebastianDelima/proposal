import React, { Component, Fragment } from 'react';
import Caceria from '../components/Caceria';
import Camps   from '../components/Camps'

export default class Home extends Component{
 
    constructor(){
        super()
        this.state = ({
            loaded:  false,
            caceria: false,
            camps:   false
        })

    }

    loadCaceria = () => {
       this.setState({
           caceria: true
       })
    }

    loadCamps = () => {
        this.setState({
            camps: true
        })
     }

     loadMain = () => {
      this.setState({
          loaded: true
      })

      
    }

    componentDidMount = () => {
        setTimeout(this.loadMain, 5000)
    }

    render(){

        if(!this.state.loaded){
        return(
          <Fragment >
         <div id="svg-container">
            <svg  id="deer" viewBox="-100 100 800 800" preserveAspectRatio="xMidYMid meet">
            <path id="path7050" class="path" d="m 187.44537,731.24092 15.72591,-20.08687 -17.17956,-0.13215 z"/>
            <path id="path7062" class="path" d="m 186.55602,711.0219 -0.92505,-28.54449 18.15934,28.28019 z"/>
            <path id="path7064" class="path" d="m 197.05666,701.24277 7.66472,-38.72007 -19.20716,18.2821 z"/>
            <path id="path7065" class="path" d="m 185.81422,680.80973 12.99609,-49.2053 6.34322,29.99815 z"/>
            <path id="path7066" class="path" d="m 205.15353,661.60258 14.933,-35.28417 -21.27622,5.41817 z"/>
            <path id="path7067" class="path" d="m 220.08653,626.04918 32.64115,-24.31568 -54.04952,29.73385 z"/>
            <path id="path7068" class="path" d="m 198.67816,631.46735 17.70816,-27.35514 35.81276,-2.11441 z"/>
            <path id="path7069" class="path" d="m 216.75417,603.98006 42.81673,-42.94889 -6.73967,40.96663 z"/>
            <path id="path7070" class="path" d="m 253.33123,601.9978 71.62553,-33.8305 -64.35726,-7.92903 z"/>
            <path id="path7071" class="path" d="m 258.93875,598.82619 26.82654,49.82071 3.96451,-63.82865 z"/>
            <path id="path7072" class="path" d="M 286.02959,650.57196 299.90538,646.5325 288.6726,600.9406 z"/>
            <path id="path7076" class="path" d="m 286.16174,649.57196 12.81859,49.95286 1.0572,-52.86017 z"/>
            <path id="path7080" class="path" d="m 300.03753,646.5325 11.23279,55.37102 -12.58636,-3.52271 z"/>
            <path id="path7081" class="path" d="m 298.68396,698.38081 6.24314,39.59978 6.47537,-35.94491 z"/> 
            <path id="path7086" class="path" d="m 305.1914,737.58414 -18.63321,0.13215 14.80085,-22.99417 z"/>
            <path id="path7088" class="path" d="m 244.27005,575.69987 -50.74576,-73.47564 65.81091,57.74974 z"/>
            <path id="path7090" class="path" d="m 193.65644,502.22423 26.56224,-7.26827 2.24656,32.37685 z"/>
            <path id="path7091" class="path" d="m 222.46524,527.33281 134.89545,-2.07099 -97.9298,34.94823 z"/>
            <path id="path7092" class="path" d="m 357.1738,525.07493 -15.88556,-44.29267 -92.51002,45.78778 z"/>
            <path id="path7094" class="path" d="m 341.28824,480.59537 -7.84933,-21.67912 -40.36801,45.6009 z"/>
            <path id="path7096" class="path" d="m 292.51023,504.70404 -41.86312,-49.15179 81.60491,3.17711 z"/>
            <path id="path7098" class="path" d="m 220.18422,495.98581 29.15467,31.77112 -26.87365,-0.57588 z"/>
            <path id="path7100" class="path" d="m 218.74489,495.79893 72.76534,9.34444 -40.34156,-49.43357 z"/>
            <path id="path7101" class="path" d="m 292.51023,505.14337  -43.14156,21.03357 -28,-31.1 z"/>
            <path id="path7102" class="path" d="M 220.74489,494.79893 212.148,468.07381 251.08645,456.55225 z"/> 
            <path id="path7104" class="path" d="m 211.96111,468.07381 -18.502,34.01378 -9.90512,-38.49911 z"/>
            <path id="path7105" class="path" d="m 211.96111,468.07381 8.502,26.01378 -24.90512,6.89911 z"/>
            <path id="path7106" class="path" d="M 211.77422,468.2607 239.06,397.61669 251.89956,455.36536 z"/>
            <path id="path7107" class="path" d="m 238.87311,397.05602 -48.59112,18.31511 36.06957,13.39045 z"/>
            <path id="path7108" class="path" d="m 226.35156,429.761 -41.79757,31.45312 10.27889,-26.22023 31.1449,-6.046 z"/>
            <path id="path7109" class="path" d="m 225.97778,429.94789 -14,36.5 -27.5,-3.8 z"/>
            <path id="path7110" class="path" d="m 189.90822,415.74491 3.73777,18.68889 -18.87578,-19.24955 z"/>
            <path id="path7111" class="path" d="m 189.90822,415.74491 4.73777,19.58889 27.87578,-7.24955 z"/>
            <path id="path7112" class="path" d="m 173.83577,414.81047 -6.16734,14.39044 25.97756,5.41978 z"/>
            <path id="path7114" class="path" d="m 168.66843,429.20091 8.5969,9.90512 17.38066,-4.11156 z"/>
            <path id="path7116" class="path" d="m 173.64888,414.62358 41.11556,-44.66645 -25.04311,45.78778 z"/>
            <path id="path7124" class="path" d="m 214.20378,370.3309 -24.48245,2.99023 -2.42956,25.97756 z"/>
            <path id="path7126" class="path" d="m 189.53444,373.13424 -10.83956,12.89533 8.22311,12.20356 z"/>
            <path id="path7128" class="path" d="m 180.75066,389.39357 -1.30822,19.4889 7,-11 z"/>
            <path id="path7129" class="path" d="m 178.88177,386.02957 -36.81712,-30.46289 46.72223,17.75445 z"/>
            <path id="path7130" class="path" d="m 188.78688,373.32113 -13.82978,-14.57734 -32.70556,-3.17711 z"/>
            <path id="path7132" class="path" d="m 142.25154,355.56668  13.456,22.23978 21.63023,8.36277 z"/>
            <path id="path7134" class="path" d="m 214.95133,370.5178 24.10867,26.35133 0.74756,-22.23978 z"/>
            <path id="path7135" class="path" d="m 214.95133,370.5178 24.10867,26.35133 -48.74756,18.23978 z"/>
            <path id="path7136" class="path" d="m 239.62067,388.08535 41.67623,-7.84933 -41.11557,-5.98045 z"/>
            <path id="path7137" class="path" d="m 240.18133,374.25557  53.26335,-19.99711 -12.33467,25.79067 z"/>
            <path id="path7138" class="path" d="m 293.81845,353.88468 -35.322,4.29844 -18.50201,16.25934 z"/>
            <path id="path7140" class="path" d="m 202.99044,371.45224 -32.14489,-32.1449 22.61356,33.64001 z"/>
            <path id="path7142" class="path" d="m 188.97377,357.62246 5.41978,-32.51868 2.24267,40.18112 z"/>
            <path id="path7144" class="path" d="m 170.65866,339.30734 -11.96089,-1.49511 28.22022,25.60378 z"/>
            <path id="path7146" class="path" d="m 170.65866,339.30734 0.37377,-52.88956 -8.22311,51.58134 z"/>
            <path id="path7148" class="path" d="m 166.92088,311.08711 -5.79356,-43.54511 9.71823,19.24955 z"/>
            <path id="path7149" class="path" d="m 170.84555,286.79155  14.01667,-37.75156 -18.12823,28.7809 z"/>
            <path id="path7150" class="path" d="m 171.03244,309.592 18.12822,-12.52155 -18.12822,22.98733 z"/>
            <path id="path7152" class="path"
            d="M 157.95021,337.43845 136.64487,308.47067 163.1831,333.3269 z"/>
            <path id="path7154" class="path" d="m 145.98932,316.69378 11.774,-31.958 -5.60667,37.93845 z"/>
            <path id="path7156" class="path" d="m 137.01865,308.65756 4.11156,-38.49912 0.93444,42.79756 z"/>
            <path id="path7158" class="path" d="m 214.95133,370.14401 17.75445,-14.39044 -5.79356,16.44622 z"/>
            <path id="path7160" class="path" d="m 233.26645,354.44535 -2.05578,-24.66934 -3.55089,29.71534 z"/>
            <path id="path7162" class="path" d="m 233.26645,355.1929 19.43644,-1.30822 -25.60378,17.94133 z"/>
            <path id="path7164" class="path" d="m 239.99444,362.66846 17.94134,-6.16734 -4.48533,-2.80333 z"/>
            <path id="path7165" class="path" d="m 253.45045,353.69779  29.34156,-13.456 -24.85623,16.07244 z"/>
            <path id="path7168" class="path" d="m 258.30956,356.68801 28.594,-11.40022 -4.29844,-4.85911 z"/>
            <path id="path7170" class="path" d="m 287.27735,345.47468 16.82,-25.23001 -21.49223,19.99712 z"/>
            <path id="path7172" class="path" d="m 304.09735,320.43156 4.11155,-34.01378 -9.71822,38.686 z"/>
            <path id="path7174" class="path" d="m 292.69712,330.14978 -8.97066,-12.70844 -1.12134,22.80045 z"/>
            <path id="path7176" class="path" d="m 288.95934,324.35623 7.66245,-14.57734 -13.08223,6.728 z"/>
            <path id="path7178" class="path" d="m 283.53956,316.69378 -29.90222,-15.69867 29.34156,22.42667 z"/>
            <path id="path7180" class="path" d="m 296.99556,309.21823 3.36401,-19.43645 -10.09201,22.80045 z"/>
            <path id="path7182" class="path" d="m 300.35957,289.96867 -5.41978,-31.39734 0.56066,40.55489 z"/>
            <path id="path7184" class="path" d="m 295.31357,294.82778 -10.09201,-5.79356 10.46578,10.65267 z"/>
            <path id="path7188" class="path" d="m 356.98691,524.88804 -32.51867,42.98445 72.32601,-2.80333 z"/>
            <path id="path7189" class="path" d="m 356.98691,524.88804 -32.51867,42.98445 -65.32601,-7.80333 z"/>
            <path id="path7190" class="path" d="m 357.1738,525.07493 43.35823,-30.276 -3.17711,69.89645 z"/>
            <path id="path7192" class="path" d="m 333.6258,458.72937 66.90623,35.88267 7.66244,-42.61067 z"/>
            <path id="path7193" class="path" d="m 333.6258,458.72937 66.90623,35.88267 -42.66244,30.61067 z"/>
            <path id="path7194" class="path" d="m 454.72982,481.52981 18.12822,17.94134 -10.83956,-5.60667 z"/>
            <path id="path7195" class="path" d="m 462.01848,493.86448  -17.00689,-27.28578 -37.004,-14.76423 z"/>
            <path id="path7196" class="path" d="m 408.00759,451.81447  53.63712,42.05001 -61.48646,0.37378 z"/>
            <path id="path7197" class="path" d="m 461.64471,493.86448 -61.48646,0.37378 50.46001,50.08623 11.40022,-50.46001 z"/>
            <path id="path7198" class="path" d="m 396.79425,564.88227 53.63712,-20.74467 -51,-50 z"/>
            <path id="path7200" class="path" d="m 461.8316,494.23826 6.728,17.94134 4.29844,-12.89534 z"/>
            <path id="path7202" class="path" d="m 450.61826,543.95071 17.94134,-31.77111 -8,-15 z"/>
            <path id="path7206" class="path" d="m 472.85804,499.47115 -0.56067,43.17134 -3.55088,-30.27601 z"/>
            <path id="path7214" class="path" d="m 467.99893,512.55337 -13.64289,47.65668 -4,-16 z"/>
            <path id="path7216" class="path" d="m 458.65448,546.38027 13.82978,-4.11156 0,0 -5.09201,-29.99712 z"/>
            <path id="path7215" class="path" d="m 458.65448,546.38027 13.82978,-4.11156 10.09201,19.99712 z"/>
            <path id="path7218" class="path" d="m 396.98114,565.25605 37.93845,70.64401 15.88556,-91.57557 z"/>
            <path id="path7219" class="path" d="m 450.61826,544.51138 11.58711,51.39445 -20.184,0.37378 z"/>
            <path id="path7222" class="path" d="m 442.02173,596.27961   7.84933,23.17423 12.52156,-23.92179 z"/>
            <path id="path7224" class="path" d="m 462.01848,595.71894 27.47268,35.32201 -39.99423,-11.21334 z"/>
            <path id="path7225" class="path" d="m 470.42849,625.62117 -19.99423,-5.21334 30.08911,37.75157 z"/>
            <path id="path7226" class="path" d="m 470.42849,626.62117 16.44622,57.56179 2.364,-51.95512 z"/>
            <path id="path7228" class="path" d="m 488.86493,641.69362 20.55778,67.09312 -23.548,-26.35134 z"/>
            <path id="path7230" class="path" d="m 510.42271,710.28674 -17.56755,5.79356 -6.54112,-32.89245 z"/>
            <path id="path7231" class="path" d="m 510.42271,710.59985 -15.138,28.22023 -2.24266,-22.05289 z"/>
            <path id="path7232" class="path" d="m 493.04205,717.76719  -16.44623,22.98733 18.31511,-0.18689 z"/>
            <path id="path7233" class="path" d="m 439.59181,609.05361 20.18401,40.5549 -24.66934,-12.70845 z"/>
            <path id="path7234" class="path" d="m 435.10648,637.00006  -3.73778,49.52557 28.59401,-36.25646 z"/>
            <path id="path7235" class="path" d="m 459.96271,649.16917  -22.98734,64.10291 -5.79356,-27.84645 z"/>
            <path id="path7236" class="path" d="m 431.18181,685.42563 -15.32489,43.35823 20.74467,-14.57734 z"/>
            <path id="path7237" class="path" d="m 436.60159,713.45896 -12.33467,32.70556 -8.78378,-16.63311 z"/>
            <path id="path7238" class="path" d="m 415.48314,729.53141  -15.51178,16.82 24.10867,0.18689 z"/>
            </svg>
         
         </div>
                </Fragment>


         ) 
        }else if(this.state.caceria){
            return(
              <Caceria/>
            )
        }else if(this.state.camps){
            return(
             <Camps/>
            )
        }else{
            return(
                <Fragment>
                    <container id='home-img-cont'>
                        <div id='home-img1'onClick={() => this.loadCaceria()}>Cacería</div>
                        <div id='home-img2'onClick={() => this.loadCamps()}>  Camps</div>
                    </container>
                </Fragment>
            
            )
        }
    }
  
}
