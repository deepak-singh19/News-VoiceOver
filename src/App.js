import React, {useState ,useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";
import NewsCards from "./components/NewsCards/newsCards.js";
import { styled } from '@mui/material/styles';



// Migration

const PREFIX='App';

const classes={
    
    logoContainer: `${PREFIX}-logoContainer`,
    alanLogo: `${PREFIX}-alanLogo`,
}

const Root= styled('div')(({ theme }) => ({

    [`& .${classes.logoContainer}`]: {
        padding: '0 5%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        [theme.breakpoints.down('lg')]: {
            flexDirection: 'column-reverse',
            textAlign: 'center',
        },
    },
    [`& .${classes.alanLogo}`]: {
        height: '27vmin',
        borderRadius: '15%',
        padding: '0 5%',
        margin: '3% 0',
        [theme.breakpoints.down('lg')]: {
            height: '35vmin',
        },
    },



    }));


// ALLAN AI KEY




const alankey ="3886ef766e016f777bf7d88827c3d6cd2e956eca572e1d8b807a3e2338fdd0dc/stage";
// const newskey="16aa53c6fdc4425d89d499fcaea5d1d7";
const App=()=>{

    const[newsArticles, setNewsArticles] = useState([]);
    const[activeArticle, setActiveArticle]= useState(-1);

    

    useEffect(()=>{
        alanBtn({
            key:alankey,
            onCommand:({ command, articles, number})=>{
                if(command=== 'newHeadlines'){
                    console.log(articles);
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                    
                }
                else if(command=== 'highlight'){
                    setActiveArticle((prevActiveArticle)=> prevActiveArticle+1);

                }
                else if(command ==='open'){
                    const parsedNumber =number.length>2 ?wordsToNumbers(number,{fuzzy:true}): number;
                    const article= articles[parsedNumber-1];

                    if(parsedNumber>20){
                        alanBtn().playText('Please try again');
                    }
                    else if(article){
                        
                        // alanBtn().playText('Opening....');
                        alanBtn().playText('Opening');
                        window.open(article.url,'_blank');
                    }

                    
                }
            }
        })

    },[]);
    return(
        <Root>
            <div className={classes.logoContainer}>
                <img  src="https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg" className={classes.alanLogo} alt="alan logo"/>
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
        </Root>
    );
}

export default App;