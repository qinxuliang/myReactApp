import './Tabbar.css'

function Tabbar() {

    let icons = ['home-outline', 'person-outline', 'mail-outline', 'layers-outline', 'settings-outline'];
    return(
        <div className='navigation'>
            <ul>
                {
                    ['Home', 'Profile', 'Msg','Photos','Setting'].map((item, index) => {
                        return(
                            <li className='list' key={index} onClick={
                                () => {
                                    let list = document.querySelectorAll('.list');
                                    console.log(list);
                                    list.forEach((item) => item.classList.remove('active'));
                                    list[index].classList.add('active');
                                }
                            }>
                                <a href='#{$index}' key={index}>
                                <span className='icon'>
                                    <ion-icon name={icons[index]}></ion-icon>
                                </span>
                                <span className='text'>{item}</span>
                                </a>
                            </li>
                        )
                    })   
                }
                <div className='indicator'></div>
            </ul>
        </div>
    )
}


export default Tabbar;