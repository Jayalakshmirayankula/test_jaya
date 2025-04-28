import './App.css';
function App() {

    function validateInput(event) {
        event.preventDefault();
        const value = document.getElementById("inputField").value;
        console.log(value);
        let left = 0;
        let right = value.length - 1;
        while (left < right) {
            if (value[left] !== value[right]) {
                console.log("Not a palindrome");
                return false;
            }
            left++;
            right--;
        }
        console.log("It is a palindrome");
        return true;
    }

    return (
        <>
            <form onSubmit={validateInput}>
                <div className="App">
                    <div>
                        <label htmlFor="inputField">Name</label>
                    </div>
                    <div>
                        <input className="validate" id="inputField" type="text" placeholder="Validate" />
                    </div>
                    <button className="submit" type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}

export default App;
