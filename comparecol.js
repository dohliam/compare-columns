function only_colone() {
  var col_one = document.getElementById("col_one");
  var col_two = document.getElementById("col_two");
  uniqone = col_one.value.split("\n");
  uniqtwo = col_two.value.split("\n");
  output = document.getElementById("colout");
  output.value = uniqcol(uniqone,uniqtwo).join("\n");
}

function only_coltwo() {
  var col_one = document.getElementById("col_one");
  var col_two = document.getElementById("col_two");
  uniqone = col_one.value.split("\n");
  uniqtwo = col_two.value.split("\n");
  output = document.getElementById("colout");
  output.value = uniqcol(uniqtwo,uniqone).join("\n");
}

function uniqcol(a,b) {
  uniq = new Array(0);
  for(i=0;i<a.length;i++){
    if(!contains(b, a[i])){
      uniq.length+=1;
      uniq[uniq.length-1]=a[i];
    }
  }
  return uniq;
}

function contains(a, e) {
  for(j=0;j<a.length;j++)if(a[j]==e)return true;
  return false;
}

function colfboth() {
  var col_one = document.getElementById("col_one");
  var col_two = document.getElementById("col_two");
  uniqone = col_one.value.split("\n");
  uniqtwo = col_two.value.split("\n");
  output = document.getElementById("colout");
  output.value = bothcol(uniqone,uniqtwo).join("\n");
}

function bothcol(a,b) {
  in_both = new Array(0);
  for(i=0;i<a.length;i++){
    if(contains(b, a[i])){
      in_both.length+=1;
      in_both[in_both.length-1]=a[i];
    }
  }
  return in_both;
}
