import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './scss/style.scss';
import items from "./data/items";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
    Redirect,
} from 'react-router-dom';
import img1 from "./images/river-3526971_1280.jpg";
import img2 from "./images/tent-2339491_1280.jpg";


class Menu extends Component {
    render() {
        return (
            <>
            <header className="container">
                <div className="menu">
                    <div className="logo">
                        <Link style={{textDecoration: 'none', color: 'blue'}} to='/'>
                            Logo
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <Link style={{textDecoration: 'none', color: 'blue'}} to="/aboutus">
                                o nas
                            </Link>
                        </li>
                        <li>
                            <Link style={{textDecoration: 'none', color: 'yellow'}} to="/rules">
                            zasady
                        </Link>
                        </li>
                    <li>
                        <Link style={{textDecoration: 'none', color: 'green'}} to="/contactform">
                            kontakt
                        </Link>
                    </li>
                    <li>
                        <Link style={{textDecoration: 'none', color: 'orange'}} to="/itemlist">
                            wypożycz
                        </Link>
                    </li>
                    <li>
                        <Link style={{textDecoration: 'none', color: 'white'}} to="/login">
                        zaloguj/zarejestruj się
                    </Link>
                    </li>
                </ul>
            </div>
            </header>
            < />
        )
    }
}


class Main extends Component {
    state = {
        image: img1,
        redirect: false
    };

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                image: img2
            });
        }, 3000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    redirect = () => {
        this.setState({
            redirect: `/itemlist/${this.props.text}`

        })
    }


    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }
        return (
            <>
                <section className="container">
                    <h1>Leży mi to</h1>
                    <div className="carouselle" style={{backgroundImage: `url(${this.state.image})`}}></div>
                    <div className="input">
                        <input type="text" placeholder="wyszukaj" value={this.props.text}
                               onChange={e => this.props.onChange(e.target.value)}/>
                        <button onClick={this.redirect}>SZUKAJ</button>
                    </div>
                </section>
            </>
        )
    }
}

class Footer extends Component {
    render() {
        return (
            <footer className="container">
                <h3>&copy;Copyright Leży mi to 2019</h3>
                <h3>LOGO</h3>
            </footer>
        )
    }
}


class AboutUs extends Component {
    render() {
        return (
            <>
            <section className="container about-us">
                <h1>O nas</h1>
                <p>Projekt Leży mi to, powstał w wyniku doświadczeń naszych oraz naszych znajomych, związanych z
                    planowaniem wyjazdów na wakacje.
                    Dłuższe wycieczki, zwłaszcza kiedy środkiem transportu jest samochód i zamierzamy spać pod gołym
                    niebem, wymagają zabrania ze sobą mnóstwa rzeczy: lodówki turystycznej, namiotu, przenośnej kabiny
                    prysznicowej czy małej kuchenki gazowej. Dla jak najlepszego przygotowania, na krótko przed wyjazdem
                    kupujemy wszystkie te przedmioty, następnie zabieramy je ze sobą w podróż, wracamy i...
                    No właśnie, co się teraz dzieje z Twoim namiotem, kupionym specjalnie na wyjazd na Bałkany 3 lata
                    temu?
                    Leży mi to gdzieś w garażu - odpowiadasz? Skąd my to znamy ;)

                    Wyobraź sobie, że dzięki tej stronie, Twój namiot nie będzie już smutny, niepotrzebny i zakurzony
                    czekał w garażu na kolejne wakacje. Wybierze się w niejedną podróż z ludźmi, którzy będą go
                    potrzebować.
                    Co więcej, będzie „zarabiał” dla Ciebie i dołoży swoje „3 grosze” do skarbonki z napisem: na
                    wakacje.

                    Wypożyczając innym swój bardzo rzadko używany przedmiot, sprawisz także, że świat zużyje mniej
                    plastiku bo nie wyprodukuje kolejnych 30 namiotów, które każdy raz w roku zabierze w podróż na 2
                    tygodnie.
                </p>
                <p>
                    <strong>To jak, leży Ci to?</strong>
                </p>
                <p>
                    Magda i Piotrek
                </p>

            </section>
                </>
        )
    }
}

class ContactForm extends Component {
    render() {
        return (
            <>
                <section className="container contact-form">
                    <form noValidate action="#">
                        <div className="form">
                            <h1>Twoje dane</h1>
                            <div>
                                <label>Podaj swoje imię</label><input type="text" name="name" placeholder="Imię"/>
                            </div>
                            <div>
                                <label>Podaj nazwisko</label><input type="text" name="second_name"
                                                                    placeholder="Nazwisko"/>
                            </div>
                            <div>
                                <label>Podaj adres E-mail</label><input type="email" name="email" placeholder="E-mail"/>
                            </div>
                            <div>
                                <label>Wpisz tekst</label><input type="textarea" name="text" placeholder=""/>
                            </div>
                            <div>
                                <input type="submit" name="button" placeholder="Wyślij"/>
                            </div>
                        </div>
                    </form>
                </section>
            </>
        )
    }
}

class ItemList extends Component {
    render() {

        const text = this.props.match.params.query;
        const data = this.props.filter === false? items: items.filter(obj => obj.name.indexOf(text) > -1)
        return (
            <>
                <section className="container item-list">
                    {data.map(obj =>
                        <div className='item1' key={obj.id}>
                            <img id='img1' src={obj.image}/>
                            <div className='item1Text'>
                                <div className='item1Title'>
                                    {obj.name}
                                </div>
                                <div className='item1Description'>
                                    {obj.text}
                                </div>
                                <button className='rentButton'>Wypożycz!</button>
                            </div>

                        </div>)}
                </section>
            </>
        )
    }

}


class Rules extends Component{
    render() {
        return (
            <section className="container about-us">
                <h1>Zasady</h1>
                <p>Jak działa Leży mi to?

                    Krzysiek ma namiot który leży mu w garażu, używa go raz do roku.
                    Zakłada więc konto użytkownika, dodaje zdjęcie i opis namiotu. Określa w jakim terminie może go wypożyczyć i jaka jest stawka za dzień wypożyczenia. Wybiera także preferowany przez niego sposób dostarczenia do osoby która go wypożyczy: kurierem lub może odbiór osobisty.

                    Kasia i Tomek, wybierają się na tydzień w góry i nie mają namiotu.
                    Zamiast kupować namiot którego potrzebują na zaledwie tydzień, wchodzą na www.lezymito.pl i wpisują w wyszukiwarkę: namiot.

                    Z listy dostępnych, wybierają ten o odpowiedniej wielkości, dostępny w terminie ich wyjazdu i w satysfakcjonującej ich cenie. Po dodaniu przedmiotu do wypożyczenia wybierają sposób dostarczenia go do ich mieszkania, pokrywają ewentualne koszty przesyłki.

                    Kasia i Tomek dokonują płatności za wypożyczenie kartą kredytową lub przelewem na konto Krzyśka.

                    Serwis Leży mi to, pobiera od każdej transakcji prowizję, proporcjonalną do ceny wypożyczenia, pozwala nam to na utrzymanie serwisu i jego ciągły rozwój.

                    Dodatkowo, w trosce o wypożyczany przedmiot, od osoby która go wypożycza pobieramy kaucję. Jest ona zwracana zaraz po tym jak wypożyczana rzecz wraca do właściciela.

                    Leży Ci to? To: <Link style={{textDecoration: 'none', color: 'white'}} to="/login">
                zakładaj konto
                </Link>

                </p>
            </section>
        )
    }
}

class Login extends Component{
            render(){
            return(
                <>
                <section className="container contact-form">
                <form noValidate action="#">
                <div className="form">
                <h1>Twoje dane</h1>
                <div>
                <label>Podaj swoje imię i nazwisko</label><input type="text" name="name" placeholder="Imię i Nazwisko"/>
                </div>
                <div>
                <label>Podaj hasło</label><input type="password" name="password"
                placeholder="Hasło"/>
                </div>
                <div>
                <label>Powtórz hasło</label><input type="password" name="password" placeholder="Hasło"/>
                </div>
                <div>
                <label>Podaj adres E-mail</label><input type="email" name="email" placeholder="E-mail"/>
                </div>
                <div>
                <input type="submit" name="button" placeholder=""/>
                </div>
                </div>
                </form>
                </section>
                </>
                )
            }
            }




class App extends Component {
    state = {
        text: ""
    };

    stateCHange = (text) => {
        this.setState({
            text: text,
        });
    };

    render() {

        return (
            <HashRouter>
                <>
                    <Menu/>
                    <Switch>
                        <Route exact path='/'
                               render={() => <Main text={this.state.text} onChange={this.stateCHange}/>}/>
                        <Route exact path='/aboutus' component={AboutUs}/>
                        <Route exact path='/contactform' component={ContactForm}/>
                         <Route exact path='/rules' component={Rules}/>
                        <Route exact path='/itemlist' component={(props)=><ItemList {...props} filter={false}/>}/>
                        <Route exact path='/itemlist/:query' component={ItemList}/>
                <Route exact path='/login' component={Login}/>

                    </Switch>
                    <Footer/>
                </>
            </HashRouter>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.querySelector('#app')
);