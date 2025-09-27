function greet(callback=()=>{console.log("Hello THIS IS CALLBACK");}) {
  console.log("Hello " + name);
  callback();
}

greet();


