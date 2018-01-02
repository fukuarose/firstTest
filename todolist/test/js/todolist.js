(function(){
	var config={
		classShow:"show",
		classHide:"hide"
	};
	var TodoList=function(name){
		this.list=document.querySelector('[data-list="'+name+'"]');
		this.childs=this.list.querySelectorAll('li');
		this.input=document.querySelector('[data-input="'+name+'"]');
	}
	var todo = new TodoList('work');
	todo.init();
	TodoList.prototype.clearInput=function(){
		this.input.value='';
	}
	TodoList.prototype.append=function(){
		var oLi=document.createElement("li");
		var oBtn=document.createElement("button");
		var oSpan=document.createElement("span");
		oSpan.innerHTML=this.input.value.trim();
		oBtn.innnerHTML="delete";
		OLi.appendChild(oSpan);
		oLi.appendChild(oBtn);
		this.list.appendChild(oLi);
	}
	this.init=function(){
		//input按下enter键
		this.input.addEventListener('keyup',function(event){
			this.handleKepup(event);
		}.bind(this));
		//事案件委托，点击list
		this.list.addEventListener('click',function(event){
			this.handleListClick(event);
		}.bind(this));
		//input的值改变时
		this.input.addEventListener('input',function(event){
			this.handleInputChange(event);
		}.bind(this));
	}
	TodoList.prototype.handleKepup=function(event){
		event.preventDefault();
		event.stopPropagation();
		this.addItem(event.keyCode,event.target);
	}
	TodoList.prototype.handleListClick=function(event){
		event.preventDefault();
		event.stopPropagation();
		this.removeItem(event.target);
	}
	TodoList.prototype.handleInputChange=function(event){
		var value=event.target.value;
		event.preventDefault();
		event.stopPropagation();
		this.findItem(value);
	}
	//逻辑单元代码编写
	//1.增加一个todo-Item
	TodoList.prototype.addItem=function(keyCode,target){
		if(event.keyCode==13&&event.target.value.trim().length>0){//trim()方法返回调用字符串对象的一个副本，但是所有起始和结尾的空格都被删除了，例子如下：String s="    Hello World      ".trim();就是把"Hello World"放入s中
			this.append();
			this.clearInput();
			this.childs=this.list.querySelectorAll('li');
		}
	}
	//2.删除一个todo_item
	TodoList.prototype.removeItem=function(target){
		//初始化执行的 时候，不存在target
		if(target){
			if(target.nodeName=="BUTTON"){
			target.parentNode.parentNode.removeChild(target.parentNode);
			this.childs=this.list.querySelectorAll('li');
		}
		}
	}
//	 查找输入字符串是否存在
// * 如果不存在，就显示所有的list
// * 如果存在，就显示存在的
	TodoList.prototype.findItem=function(value){
		var find=false;
		//隐藏所有
		for(var i=0;i<this.childs.length;i++){
			this.childs[i].className=config.classHide;
		}
		for(var i=0;i<this.childs.length;i++){
			var nowEl=this.childs[i];
			if(nowEl.firstChild.innerText.indexOf(value)!=-1){
				nowEl.className=config.classShow;
				find=true;
			}
		}
		if(!find){
			for(var i=0;i<this.childs.length;i++){
				this.childs[i].className=config.classShow;
			}
		}
	}
})()
