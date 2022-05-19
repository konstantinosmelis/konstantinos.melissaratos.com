import TypeWriter from 'typewriter-effect';

function Landing() {
    const calculateAge = (birthday) => {
        var birthdayDate = new Date(birthday);
        var monthDif = Date.now() - birthdayDate.getTime();
        var diffDate = new Date(monthDif);
        var year = diffDate.getUTCFullYear();
        return Math.abs(year - 1970);
    }

    var welcome = "<strong>Hello and <span style='color: rgb(253, 16, 86);'>welcome</span></strong>";
    var name = "<strong>I'm <span style='color: rgb(253, 16, 86);'>Konstantinos Me</span>lissaratos</strong>"
    var age = "<strong><span style='color: rgb(253, 16, 86);'>" + calculateAge("10/16/2001") + "</span> years old</strong>";

    return (
        <TypeWriter className="landing-text"
            onInit={(typewriter) => {
                typewriter.typeString(welcome)
                    .pauseFor(800)
                    .deleteAll()
                    .typeString(name)
                    .pauseFor(800)
                    .deleteChars(25)
                    .typeString(age)
                    .pauseFor(500)
                    .start()
            }}

            options={{
                loop: true,
                cursorClassName: "Typewriter__cursor landing-page-typewriter",
                wrapperClassName: "Typewriter__wrapper landing-page-typewriter"

            }}
        />
    );
}

export default Landing;