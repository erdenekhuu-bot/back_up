import Image from '../assets/Image1.png'
import rectangle from '../assets/Rectangle 2.png'
import w_heart from '../assets/w_heart.png'
import share from '../assets/share1.png' 


export default function Profile(){
    return (
        <div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 2fr'}}>
                <button style={{height: 39, border: 'none',fontSize: 18}}>Нүүр хуудас<span style={{margin: 5}}> {'>'}</span></button>
                <button style={{height: 39, border: 'none',fontSize: 18}}>Lifestyle<span style={{margin: 5}}> {'>'}</span></button>
                <button style={{height: 39, border: 'none',fontSize: 18}}>Hobby<span style={{margin: 5}}> {'>'}</span></button>
                <button style={{height: 39, border: 'none',fontSize: 18}}><b>Theme Installation</b></button>
                <button style={{border: 'none'}}></button>
            </div>
            <div style={{width: 310, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: 15, fontFamily: 'sans-serif'}}>
                <span style={{display: 'flex', alignItems: 'center'}}><img src={Image} alt="" /><b>Tracey Willson</b></span>
                <span style={{color: '#2F80ED'}}><b>Follow</b></span>
            </div>
            <img src={rectangle} alt="" /> <br />
            <b style={{fontSize: 29, fontFamily: 'sans-serif'}}>Theme Installatoin</b> <p></p>
            <div style={{width: 897, display: 'flex', justifyContent: 'space-between'}}>
                <span style={{display: 'flex', alignItems: 'center'}}>
                    <img src={w_heart} alt="" />
                    <span><b>23</b></span>
                </span>
                <span><img src={share} alt="" /></span>
            </div> <p></p>
            <div style={{width: 890, fontSize: 20}}>
                Follow these 6 steps and you’ll get your Help Scout account up and running in no time. If you'd like to get a full tour of Help Scout and all its features, attend one of our weekly live demos or take a video tour. 
            </div> <p></p>
            <ul>
                <li>By the end of step 3: You’ll be up and ready to serve customers </li>
                <li>By the end of step 6: Your team will be smiling and at their most productive.</li>
            </ul> <p></p>
            <b style={{fontSize: 23}}>The 6 steps to setup success</b> <p></p>
            <ol>
                <li>Get your email into Help Scout</li>
                <li>Customize your Mailbox</li>
                <li>Collaborate with a friend</li>
                <li>Get organized and optimized</li>
                <li>Integrate your favorite apps</li>
                <li>What’s up, Docs?</li>
            </ol> <p></p>
            <div style={{width: 890}}>
                Take 10-20 minutes on each step per day to get set up in a week, or be an overachiever and knock through all of them in a couple of hours.
            </div> <p></p>
            <b style={{fontSize: 23}}>Parent Theme Installation</b>
            <div style={{width: 890}}>
                When you unzip the downloaded file, you will see a bunch of folders. The most important one is the THEME folder which contains the installable theme .ZIP.
            </div> <p></p>
            <b style={{fontSize: 23}}>Child Theme Installation</b> <p></p>
            <div style={{width: 890}}>
                If you don’t know what a WordPress child theme is, please read this article in the WordPress codex. The article also explains how to create a child theme, but don’t worry, the Lore child theme is already included in the package.

                This documentation assumes that you are running the child theme, so it is highly recommended to install it. The Child theme .ZIP can be found in Child Theme folder. Install it in exactly the same way as parent theme, described in previous steps.

 
                Once you have both parent and child themes installed, you need to activate the child one.
                If you don’t know what a WordPress child theme is, please read this article in the WordPress codex. The article also explains how to create a child theme, but don’t worry, the Lore child theme is already included in the package.

                This documentation assumes that you are running the child theme, so it is highly recommended to install it. The Child theme .ZIP can be found in Child Theme folder. Install it in exactly the same way as parent theme, described in previous steps.

 
                Once you have both parent and child themes installed, you need to activate the child one.If you don’t know what a WordPress child theme is, please read this article in the WordPress codex. The article also explains how to create a child theme, but don’t worry, the Lore child theme is already included in the package.

                This documentation assumes that you are running the child theme, so it is highly recommended to install it. The Child theme .ZIP can be found in Child Theme folder. Install it in exactly the same way as parent theme, described in previous steps.

 
                Once you have both parent and child themes installed, you need to activate the child one.If you don’t know what a WordPress child theme is, please read this article in the WordPress codex. The article also explains how to create a child theme, but don’t worry, the Lore child theme is already included in the package.

                This documentation assumes that you are running the child theme, so it is highly recommended to install it. The Child theme .ZIP can be found in Child Theme folder. Install it in exactly the same way as parent theme, described in previous steps.

            </div>
        </div>
    )
}