
//////1/////
async function foo() {
    let count = 2;
    function Onefoo() {
        return new Promise(function(resolve, reject) {
            setTimeout(() => resolve( count = count * 2), 3000);
        });
    }

    function SecFoo() {
        return new Promise(function(resolve, reject) {
            setTimeout(() => resolve( count = count + 1), 2000);
        });
    }

    await Onefoo();
    let result = await SecFoo();
    console.log(result);
}
foo();