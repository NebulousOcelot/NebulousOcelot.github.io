// finalKittenGenScript.js

// array for the parent's genes
// making a table array like this was taught in AME 230
// I have a specific project I can reference for this one
// calling works as variable[rowID][columnID]
let parents = [
    // mom 0, dad 1
    ["XoXo","XoY"], // orange 0
    ["BB","BB"], // black 1
    ["CC","CC"], // colorpoint 2
    ["DD","DD"], // dilute 3
    ["dmdm","dmdm"], // caramel 4
    ["wdwd","wdwd"], // dominant white 5
    ["wsws","wsws"], // white spotting 6
    ["aa","aa"], // tabby 7
    ["tata","tata"], // ticked tabby 8
    ["spsp","spsp"], // spotted tabby 9
    ["McMc","McMc"], // primary tabby 10
    ["LL","LL"], // fur length 11
]

// kitten gene array
// this gets rewritten with each kitten
let kitten = [
    ["blank", "blank"], // orange 0
    ["blank", "blank"], // black 1
    ["blank", "blank"], // colorpoint 2
    ["blank", "blank"], // dilute 3
    ["blank", "blank"], // caramel 4
    ["blank", "blank"], // dominant white 5
    ["blank", "blank"], // white spotting 6
    ["blank", "blank"], // tabby 7
    ["blank", "blank"], // ticked tabby 8
    ["blank", "blank"], // spotted tabby 9
    ["blank", "blank"], // primary tabby 10
    ["blank", "blank"], // fur length 11
]

// number of kittens to be generated
let numKittens = 1;

// rewritten using Math.random() for every allele inheritance
let currentRandom = 0;

function randomize() {
    // remove existing kittens from page
    cleanKittens();

    // add kittens
    for (i = 0; i < numKittens; i += 1) {
        createKitten();
    }
}

// function to remove existing kittens from the page
function cleanKittens() {

    let kittenBlock = document.getElementById("outputBlock");

    while (kittenBlock.firstChild) {
        kittenBlock.removeChild(kittenBlock.firstChild);
    }

    // prevent this array from filling excessively
    DescArray = [];
}

function createKitten() {

    let kittenOut = document.getElementById("kittenOut");
    let kittenBlock = document.getElementById("outputBlock");

    kittenInherit(); // create genetic profile

    // insert kittenGenes <p>
    let newKitGene = document.createElement("p", { is: kittenGenes});

    let newKitGeneText = document.createTextNode(`${kitten.join()}`);
    newKitGene.appendChild(newKitGeneText);

    newKitGene.style.fontWeight = "bold";

    kittenBlock.insertBefore(newKitGene, kittenOut);

    kittenReader(); // create description string

    // insert kittenPheno <p>
    let newKitPheno = document.createElement("p", { is: kittenPheno});

    let newKitPhenoText = document.createTextNode(`${DescString}`);
    newKitPheno.appendChild(newKitPhenoText);

    newKitPheno.style.marginBottom = "18px";

    kittenBlock.insertBefore(newKitPheno, kittenOut);
}

// class definition for kitten gene text
class kittenGenes extends HTMLParagraphElement {
    constructor() {
        super();
    }
}
customElements.define("kitten-genes", kittenGenes, {extends: "p"});

// class definition for kitten phenotype description
class kittenPheno extends HTMLParagraphElement {
    constructor() {
        super();
    }
}
customElements.define("kitten-pheno", kittenPheno, {extends: "p"});

// long conditional selection
// array row, then columns
function kittenInherit() {

    inheritOrange();
    
    // fresh i number for each index
    for (i1 = 0; i1 < 2; i1 += 1) {
        inheritBlack(i1);
    }

    for (i2 = 0; i2 < 2; i2 += 1) {
        inheritColorpoint(i2);
    }

    for (i3 = 0; i3 < 2; i3 += 1) {
        inheritDilute(i3);
    }
    for (i4 = 0; i4 < 2; i4 += 1) {
        inheritCaramel(i4);
    }

    for (i5 = 0; i5 < 2; i5 += 1) {
        inheritDomWhite(i5);
    }
    for (i6 = 0; i6 < 2; i6 += 1) {
        inheritWhiteSpot(i6);
    }

    for (i7 = 0; i7 < 2; i7 += 1) {
        inheritTabby(i7);
    }
    for (i8 = 0; i8 < 2; i8 += 1) {
        inheritTicked(i8);
    }
    for (i9 = 0; i9 < 2; i9 += 1) {
        inheritSpotted(i9);
    }
    for (i10 = 0; i10 < 2; i10 += 1) {
        inheritTabbyType(i10);
    }

    for (i11 = 0; i11 < 2; i11 += 1) {
        inheritFur(i11);
    }
}

// orange, the only one different between sexes. index 0
function inheritOrange() {
    // orange from mother
    currentRandom = Math.random();
    // shorthand if statements as taught somewhere on perchance's examples page
    // from an AME 230 handout, these are "ternary" operators?
    (parents[0][0] === "XoXo" || (parents[0][0] === "XOxo" && currentRandom < 0.5)) ? kitten[0][0] = "Xo" : 
    (parents[0][0] === "XOXO" || (parents[0][0] === "XOxo" && currentRandom >= 0.5)) ? kitten[0][0] = "XO" : 
    console.log("inheritOrange mother error");

    // orange from father
    currentRandom = Math.random();
    currentRandom >= 0.5 ? kitten[0][1] = "Y" : 
    parents[0][1] === "XoY" ? kitten[0][1] = "Xo" :
    parents[0][1] === "XOY" ? kitten [0][1] = "XO" :
    console.log("inheritOrange father error");
}

// conditional test for each gene locus.
// black. index 1
function inheritBlack(par) {
    currentRandom = Math.random();
    // homozygous
    parents[1][par] === "BB" ? kitten[1][par] = "B" :
    parents[1][par] === "bb" ? kitten[1][par] = "b" :
    parents[1][par] === "b1b1" ? kitten[1][par] = "b1" :
    // heterozygous
    ((parents[1][par] === "Bb" || parents[1][par] === "Bb1") && currentRandom >= 0.5) ? kitten[1][par] = "B" :
    parents[1][par] === "Bb" && currentRandom < 0.5 ? kitten[1][par] = "b" :
    ((parents[1][par] === "Bb1" || parents[1][par] === "bb1") && currentRandom < 0.5) ? kitten[1][par] = "b1" : 
    parents[1][par] === "bb1" && currentRandom >= 0.5 ? kitten[1][par] = "b" :
    // error statement
    console.log("inheritBlack error");
}

// colorpoint. index 2.
// five alleles, what a mess. fifteen combinations
// actually, no, it's thirty because of the random
function inheritColorpoint(par) {
    currentRandom = Math.random();
    // homozygous
    parents[2][par] === "CC" ? kitten[2][par] = "C" :
    parents[2][par] === "cscs" ? kitten[2][par] = "cs" :
    parents[2][par] === "cbcb" ? kitten[2][par] = "cb" :
    parents[2][par] === "c2c2" ? kitten[2][par] = "c2" :
    parents[2][par] === "cc" ? kitten[2][par] = "c" :
    // heterozygous, first selection
    // expediting this first one with includes(). will not work with others
    parents[2][par].includes("C") && currentRandom >= 0.5 ? kitten[2][par] = "C" :
    ((parents[2][par] === "cscb" || parents[2][par] === "csc2" || parents[2][par] === "csc") && currentRandom >= 0.5) ? kitten[2][par] = "cs" :
    ((parents[2][par] === "cbc2" || parents[2][par] === "cbc") && currentRandom >= 0.5) ? kitten[2][par] = "cb" :
    parents[2][par] === "c2c" && currentRandom >= 0.5 ? kitten[2][par] = "c2" :
    // heterozygous, second selection
    parents[2][par] === "Ccs" && currentRandom < 0.5 ? kitten[2][par] = "cs" :
    ((parents[2][par] === "Ccb" || parents[2][par] === "cscb") && currentRandom < 0.5) ? kitten[2][par] = "cb" :
    ((parents[2][par] === "Cc2" || parents[2][par] === "csc2" || parents[2][par] === "cbc2") && currentRandom < 0.5) ? kitten[2][par] = "c2" :
    ((parents[2][par] === "Cc" || parents[2][par] === "csc" || parents[2][par] === "cbc" || parents[2][par] === "c2c") && currentRandom < 0.5) ? kitten[2][par] = "c" :
    // error statement
    console.log("inheritColorpoint error");
}

// from here things get a lot easier since it's only three options
// dilute, index 3
function inheritDilute(par) {
    currentRandom = Math.random();
    (parents[3][par] === "DD" || (parents[3][par] === "Dd" && currentRandom >= 0.5)) ? kitten[3][par] = "D" :
    (parents[3][par] === "dd" || (parents[3][par] === "Dd" && currentRandom < 0.5)) ? kitten[3][par] = "d" :
    console.log("inheritDilute error");
}
// caramel, index 4
function inheritCaramel(par) {
    currentRandom = Math.random();
    (parents[4][par] === "DmDm" || (parents[4][par] === "Dmdm" && currentRandom >= 0.5)) ? kitten[4][par] = "Dm" :
    (parents[4][par] === "dmdm" || (parents[4][par] === "Dmdm" && currentRandom < 0.5)) ? kitten[4][par] = "dm" :
    console.log("inheritCaramel error");
}

// dominant white, index 5
function inheritDomWhite(par) {
    currentRandom = Math.random();
    (parents[5][par] === "WdWd" || (parents[5][par] === "Wdwd" && currentRandom >= 0.5)) ? kitten[5][par] = "Wd" :
    (parents[5][par] === "wdwd" || (parents[5][par] === "Wdwd" && currentRandom < 0.5)) ? kitten[5][par] = "wd" :
    console.log("inheritDomWhite error");
}
// white spotting, index 6
function inheritWhiteSpot(par) {
    currentRandom = Math.random();
    (parents[6][par] === "WsWs" || (parents[6][par] === "Wsws" && currentRandom >= 0.5)) ? kitten[6][par] = "Ws" :
    (parents[6][par] === "wsws" || (parents[6][par] === "Wsws" && currentRandom < 0.5)) ? kitten[6][par] = "ws" :
    console.log("inheritWhiteSpot error");
}

// tabby index 7
function inheritTabby(par) {
    currentRandom = Math.random();
    (parents[7][par] === "AfcAfc" || (parents[7][par] === "Afca" && currentRandom >= 0.5)) ? kitten[7][par] = "Afc" :
    (parents[7][par] === "aa" || (parents[7][par] === "Afca" && currentRandom < 0.5)) ? kitten[7][par] = "a" :
    console.log("inheritTabby error");
}
// ticked tabby index 8
function inheritTicked(par) {
    currentRandom = Math.random();
    (parents[8][par] === "TaTa" || (parents[8][par] === "Tata" && currentRandom >= 0.5)) ? kitten[8][par] = "Ta" :
    (parents[8][par] === "tata" || (parents[8][par] === "Tata" && currentRandom < 0.5)) ? kitten[8][par] = "ta" :
    console.log("inheritTicked error");
}
// spotted tabby index 9
function inheritSpotted(par) {
    currentRandom = Math.random();
    (parents[9][par] === "SpSp" || (parents[9][par] === "Spsp" && currentRandom >= 0.5)) ? kitten[9][par] = "Sp" :
    (parents[9][par] === "spsp" || (parents[9][par] === "Spsp" && currentRandom < 0.5)) ? kitten[9][par] = "sp" :
    console.log("inheritSpotted error");
}
// primary tabby index 10
function inheritTabbyType(par) {
    currentRandom = Math.random();
    (parents[10][par] === "McMc" || (parents[10][par] === "Mcmc" && currentRandom >= 0.5)) ? kitten[10][par] = "Mc" :
    (parents[10][par] === "mcmc" || (parents[10][par] === "Mcmc" && currentRandom < 0.5)) ? kitten[10][par] = "mc" :
    console.log("inheritTabbyType error");
}

// fur length index 11
function inheritFur(par) {
    currentRandom = Math.random();
    (parents[11][par] === "LL" || (parents[11][par] === "Ll" && currentRandom >= 0.5)) ? kitten[11][par] = "L" :
    (parents[11][par] === "ll" || (parents[11][par] === "Ll" && currentRandom < 0.5)) ? kitten[11][par] = "l" :
    console.log("inheritFur error");
}

// passing kitten's allele array
// convert to string describing phenotype
// done by pushing elements into an array
let DescArray = [];
let DescString = "cat";
let k = "kitteny";

function kittenReader() {
    // clean up used variables
    kittenReaderCleaning();

    // kitten attributes
    k = new kittenAttributes();
    kittenTraits();
    console.log(k);

    // desired string
    // A [fur length] [self color] [tortie/calico] [[colorpoint] [tabbytype] [tabby/pseudo]] [male/female] kitten [with [amount] white spotting].

    // fur length
    kitten[11][0] === "l" && kitten[11][1] === "l" ? DescArray.push("longhaired,") : DescArray.push("shorthaired,");

    // albino
    k.isAlbino === "Yes" ?
    (kitten[2][0] === "c2" || kitten[2][1] === "c2") ?
    DescArray.push("blue-eyed albino") :
    DescArray.push("pink-eyed albino") :
    "";

    // self, with one exception for seal points
    k.isColorpoint === "Yes" && k.Self === "black" ? DescArray.push("seal") :
    DescArray.push(k.Self);

    // tortie, calico, bicolor
    (k.isAlbino === "Yes" || k.isWhite === "Yes") ? "" :
    k.isTortie === "Yes" ?
    k.isBicolor === "Yes" ?
    DescArray.push("calico") :
    k.isColorpoint === "Yes" ? // shortening for "tortie point"
    DescArray.push("tortie") :
    DescArray.push("tortoiseshell") :
    "";

    // mink and sepia
    (k.isAlbino === "Yes" || k.isWhite === "Yes") ? "" :
    k.isMink === "Yes" ? 
    DescArray.push("mink") :
    k.isSepia === "Yes" ?
    DescArray.push("sepia") :
    "";

    // tabby type
    (k.isAlbino === "Yes" || k.isWhite === "Yes") ? "" :
    k.isTabby === "Yes" || (k.PseudoTabby === "Yes" && k.isColorpoint !== "Yes") ? 
    DescArray.push(k.TabbyType) : 
    "";

    // lynx point, tabby, pseudo-tabby
    (k.isAlbino === "Yes" || k.isWhite === "Yes") ? "" :
    k.isTabby === "Yes" ?
    k.isColorpoint === "Yes" ?
    DescArray.push("lynx point") :
    DescArray.push("tabby") :
    k.PseudoTabby === "Yes" ?
    DescArray.push("pseudo-tabby") :
    k.isColorpoint === "Yes" ?
    DescArray.push("point") :
    "";

    // gender. is [0][1] a Y?
    kitten[0][1] === "Y" ? DescArray.push("male kitten") : DescArray.push("female kitten");

    // white spotting
    (k.isAlbino === "Yes" || k.isWhite === "Yes") ? "" :
    (kitten[6][0] === "Ws" && kitten [6][1] === "Ws") ? DescArray.push("with heavy white spotting") :
    (kitten[6][0] === "ws" && kitten [6][1] === "ws") ? DescArray.push("with little to no white spotting") :
    DescArray.push("with some white spotting");

    DescString = "A "+DescArray.join(" ")+"."
}

// calculator values. 
// all will need cleaning/resetting between kittens
class kittenAttributes {
    constructor() {
        this.isOrange = "cat";
        this.isTortie = "cat";
        this.isBlack = "cat";
        this.isChocolate = "cat";
        this.isCinnamon = "cat";
        this.isSolid = "cat";
        this.isColorpoint = "cat";
        this.isMink = "cat";
        this.isSepia = "cat";
        this.isAlbino = "cat";
        this.isDilute = "cat";
        this.isCaramel = "cat";
        this.isWhite = "cat";
        this.isBicolor = "cat";
        this.isTabby = "cat";
        this.Pseudotabby = "cat";
        this.Self = "cat";
        this.TabbyType = "cat";
    }
}

function kittenTraits() {
    // setting orange index 0
    // does the kitten have an orange X-chromosome?
    kitten[0][0] === "XO" || kitten[0][1] === "XO" ? k.isOrange = "Yes" : "";

    // setting tortie index 0
    // does the kitten have both orange and black X-chromosomes?
    ((kitten[0][0] === "XO" && kitten[0][1] === "Xo") || (kitten[0][0] === "Xo" && kitten[0][1] === "XO")) ? k.isTortie = "Yes" : "";

    // setting black, chocolate, cinnamon index 1
    // is either of the alleles B?
    kitten[1][0] === "B" || kitten[1][1] === "B" ? k.isBlack = "Yes" :
    // is the cat cinnamon?
    kitten[1][0] === "b1" && kitten[1][1] === "b1" ? k.isCinnamon = "Yes" :
    // if neither are true, it's chocolate
    k.isChocolate = "Yes";

    // setting colorpoint index 2
    // is there a C allele?
    kitten[2][0] === "C" || kitten[2][1] === "C" ? k.isSolid = "Yes" :
    // is the cat mink?
    ((kitten[2][0] === "cs" && kitten[2][1] === "cb") || (kitten[2][0] === "cb" && kitten[2][1] === "cs")) ? (k.isMink = "Yes", k.isColorpoint = "Yes") :
    // is the cat sepia?
    kitten[2][0] === "cb" || kitten[2][1] === "cb" ? (k.isSepia = "Yes", k.isColorpoint = "Yes") :
    // is the cat siamese?
    kitten[2][0] === "cs" || kitten [2][1] === "cs" ? k.isColorpoint = "Yes" :
    // if none of those four things are true, it's albino
    k.isAlbino = "Yes";

    // setting dilute index 3
    kitten[3][0] === "d" && kitten[3][1] === "d" ? k.isDilute = "Yes" : "";
    // setting caramel index 4
    kitten[4][0] === "Dm" || kitten[4][1] === "Dm" ? k.isCaramel = "Yes" : "";

    // setting dominant white. index 5
    kitten[5][0] === "Wd" || kitten[5][1] === "Wd" ? k.isWhite = "Yes" : "";
    // setting bicolor. index 6
    kitten[6][0] === "Ws" || kitten[6][1] === "Ws" ? k.isBicolor = "Yes" : "";

    // setting tabby. index 7
    kitten[7][0] === "Afc" || kitten[7][1] === "Afc" ? k.isTabby = "Yes" : "";

    // pseudotabby if IsOrange is true and IsTabby is not
    k.isOrange === "Yes" && k.isTabby !== "Yes" ? k.Pseudotabby = "Yes" : "";

    // ticked 8, spotted 9, primary tabby 10.
    // ticked check
    kitten[8][0] === "Ta" || kitten[8][1] === "Ta" ? k.TabbyType = "ticked" :
    // spotted check
    kitten[9][0] === "Sp" || kitten[9][1] === "Sp" ? k.TabbyType = "spoted" :
    // mackerel check
    kitten[10][0] === "Mc" || kitten[10][1] === "Mc" ? k.TabbyType = "mackerel" :
    // classic if none of those are true
    k.TabbyType = "classic";

    // setting the self color value
    kittenSelfSet();
}

function kittenSelfSet () {
    // white overrides everything
    k.isAlbino === "Yes" || k.isWhite === "Yes" ? k.Self = "white" :
    // starting with oranges
    (k.isOrange === "Yes" && k.isTortie !== "Yes") ?
    k.isDilute === "Yes" ?
    k.isCaramel === "Yes" ? 
    k.Self = "apricot" : 
    k.Self = "cream" : 
    k.Self = "orange" :
    // onto the black/dilute grid
    k.isBlack === "Yes" ? 
    k.isDilute === "Yes" ?
    k.isCaramel === "Yes" ? 
    k.Self = "caramel" :
    k.Self = "gray": 
    k.Self = "black" :
    // chocolate row
    k.isChocolate === "Yes" ?
    k.isDilute === "Yes" ?
    k.isCaramel === "Yes" ?
    k.Self = "taupe" :
    k.Self = "lilac" :
    k.Self = "chocolate" :
    // cinnamon row
    k.isCinnamon === "Yes" ?
    k.isDilute === "Yes" ?
    k.Self = "fawm" :
    k.Self = "cinnamon" :
    "";

    // tortie row
    // works by appending strings
    k.isAlbino === "Yes" || k.isWhite === "Yes" ? "" :
    k.isTortie === "Yes" ? 
    k.isDilute === "Yes" ?
    k.isCaramel === "Yes" ? 
    k.Self = k.Self+"-and-apricot" :
    k.Self = k.Self+"-and-cream" :
    k.Self = k.Self+"-and-red" :
    "";
}

// cleans up all values from the kitten reader
function kittenReaderCleaning() {
    DescArray = [];
    DescString = "cat";
    k = "kitteny";
}