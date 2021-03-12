<html><head><meta charset="utf-8">
<title>PHP Class to html body</title></head>

<body>
<div id="content"></div>
<?php

class Counter {
    private $x;
    private $y;
    private $z;
    public function __construct($x=0,$y=0,$z=0){
                $this->x=$x;
                $this->y=$y;
                $this->z=$z;
            }
    public function add(){
               return $this->x+$this->y+$this->z;
            }

    public function printCount() {        
            for ($i=0; $i<10; $i++) {
                if ($i%2==0) {
                    continue;
                }
    //   echo '<h3>' . $i . '</h3></br>';
           }
    }
}
 
class Animal {
    public $name;
    public $color;
    public $voice;

    public function __construct($name=0, $color=0, $voice=0){
        $this->name=$name;
        $this->color=$color;
        $this->voice=$voice;
    }
    public function eating(){
        echo "I'm eat my food...".PHP_EOL;
    }
    
    public function hi() {
        echo "I'm talk ".$this->voice . "!".PHP_EOL;
    }
    public function hello(){
        echo "Hello my dear! How are you?<br />".PHP_EOL."My name is " . $this->name . "!<br />".PHP_EOL;
    }
}

class Dog extends Animal {
}

$count = new Counter();
//$count->printCount();
$d = new Dog("Charly","Black","Waff");
?>

<script>
document.addEventListener("DOMContentLoaded", function(){
    var doc=document.getElementById("content");
    var appHtml= `<div id="calc"></div><div id="animals"></div>`;
    doc.innerHTML=appHtml;

    var calc=document.getElementById("calc");
        calc.style.color="#1f7b0f";
        calc.style.backgroundColor="#dedede";
        calc.style.padding="10px";
        calc.style.margin="10px";

    var animals=document.getElementById("animals")
        animals.style.color="#867602";
        animals.style.backgroundColor="#c7c7c7";
        animals.style.padding="10px";
        animals.style.margin="10px";


    animals.innerHTML=`<?php
            echo
                $d->hello() . 
                $d->eating() . 
                $d->hi();
         ?>`;

    calc.innerHTML=`Summ x+y=<?php
            $count=new Counter(45,55,25);
            echo $count->add();
        ?>`;
});
</script>

</body></html>
