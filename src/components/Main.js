import React, { Component } from "react"
import Clap from '../sounds/clap.wav';
import Hihat from '../sounds/hihat.wav';
import Kick from '../sounds/kick.wav';
import Openhat from '../sounds/openhat.wav';
import Boom from '../sounds/boom.wav';
import Ride from '../sounds/ride.wav';
import Snare from '../sounds/snare.wav';
import Tom from '../sounds/tom.wav';
import Tink from '../sounds/tink.wav';

class Main extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.playSound = this.playSound.bind(this);
    }

    handleClick = (e) => {
        const key_code = e.target.getAttribute("data-key");
        const element = document.querySelector("[data-key='" + key_code + "']")
        this.playSound(key_code);
        setTimeout(function () {
            element.classList.remove('playing');
        }, 500);
    }

    handleKeyDown = (e) => {
        let soundLabel = "";
        const pressedKey = document.querySelector("[data-key='" + e.keyCode + "']");
        const styles = {
            color: "#000",
            backgroundColor: "#FFC601"
        }

        if (pressedKey) {
            for (var i = 0; i < pressedKey.childNodes.length; i++) {
                if (pressedKey.childNodes[i].className === "sound") {
                    soundLabel = pressedKey.childNodes[i];
                    break;
                }
            }
            const mouseoverEvent = new MouseEvent('mouseover');
            pressedKey.dispatchEvent(mouseoverEvent);
            Object.assign(pressedKey.style, styles);
            Object.assign(soundLabel.style, styles);

            this.playSound(e);

            setTimeout(function () {
                pressedKey.style = "";
                soundLabel.style = "";
                pressedKey.classList.remove('playing');
            }, 500);
        } else {
            e.preventDefault();
        }
    }

    playSound = (e) => {
        const key_code = e.keyCode !== "" && typeof (e.keyCode) !== "undefined" ? e.keyCode : e;
        const audio = document.querySelector("[data-audio='" + key_code + "']");
        const key = document.querySelector("[data-key='" + key_code + "']");
        key.classList.add('playing');

        if (!audio) {
            e.preventDefault()
        } else {
            audio.currentTime = 0;
            audio.play();
        }
    }

    componentWillMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    render() {
        return (
            <div className="wrapper">
                <div data-key="65" onClick={this.handleClick} className="key">
                    <kbd data-key="65">A</kbd>
                    <span data-key="65" className="sound">clap</span>
                </div>
                <div data-key="83" onClick={this.handleClick} className="key">
                    <kbd data-key="83">S</kbd>
                    <span data-key="83" className="sound">hihat</span>
                </div>
                <div data-key="68" onClick={this.handleClick} className="key">
                    <kbd data-key="68">D</kbd>
                    <span data-key="68" className="sound">kick</span>
                </div>
                <div data-key="70" onClick={this.handleClick} className="key">
                    <kbd data-key="70">F</kbd>
                    <span data-key="70" className="sound">openhat</span>
                </div>
                <div data-key="71" onClick={this.handleClick} className="key">
                    <kbd data-key="71">G</kbd>
                    <span data-key="71" className="sound">boom</span>
                </div>
                <div data-key="72" onClick={this.handleClick} className="key">
                    <kbd data-key="72">H</kbd>
                    <span data-key="72" className="sound">ride</span>
                </div>
                <div data-key="74" onClick={this.handleClick} className="key">
                    <kbd data-key="74">J</kbd>
                    <span data-key="74" className="sound">snare</span>
                </div>
                <div data-key="75" onClick={this.handleClick} className="key">
                    <kbd data-key="75">K</kbd>
                    <span data-key="75" className="sound">tom</span>
                </div>
                <div data-key="76" onClick={this.handleClick} className="key">
                    <kbd data-key="76">L</kbd>
                    <span data-key="76" className="sound">tink</span>
                </div>

                <div>
                    <audio data-audio="65" src={Clap}></audio>
                    <audio data-audio="83" src={Hihat}></audio>
                    <audio data-audio="68" src={Kick}></audio>
                    <audio data-audio="70" src={Openhat}></audio>
                    <audio data-audio="71" src={Boom}></audio>
                    <audio data-audio="72" src={Ride}></audio>
                    <audio data-audio="74" src={Snare}></audio>
                    <audio data-audio="75" src={Tom}></audio>
                    <audio data-audio="76" src={Tink}></audio>
                </div>
            </div>
        )
    }
}

export default Main