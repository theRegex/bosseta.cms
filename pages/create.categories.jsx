import React from "react";
import DropDown from "components/dropdown";
import Loader from "components/loader";
import "semantic/form.css";
import "semantic/button.css";
import "styles/style.utils.css";
import "styles/style.colors.css";

	 export default class CreateCategories extends React.Component{
		state = {
			categories : [],
			collections: [],
			isLoading:true
		}

		componentDidMount(){
			window.setTimeout(()=>{
				this.setState({
					isLoading: false
				})
			},2000)
			//this.getCategories...
			//this.getCollections...
		}
		addCategory(){
			let categoryList = null;

			if(!this.refs.category.value.trim()){
				alert("Must enter category name!");
				this.refs.category.value = "";
				return;
			}

			
			categoryList = [...this.state.categories];

			categoryList.push({
				name: this.refs.category.value.trim()
			});

			this.refs.category.value = "";
			
			this.setState({
				categories : categoryList
			});

		}

		addCollection(){
			let collectionList = null;

			if(!(this.refs.collectionName.value.trim() && this.refs.categorySelected.value)){
				alert("Must enter collection name and select category!");
				this.refs.collectionName.value = "";
				return;
			}

			collectionList = [...this.state.collections];

			collectionList.push({
				name : this.refs.collectionName.value.trim(),
				category: this.refs.categorySelected.value || ""
			});

			this.refs.collectionName.value = "";

			this.setState({
				collections : collectionList
			},()=>{
				console.log(this.state)
			});
		}

		removeCollection(index){
			let collectionList = [...this.state.collections];

			collectionList.splice(index, 1);

			this.setState({
				collections : collectionList
			});
		}

		removeCategory(index){
			let categoryList = [...this.state.categories];

			categoryList.splice(index, 1);

			this.setState({
				categories : categoryList
			});
		}
		render(){
		
			let categoryElementList = this.state.categories.map((category, index) => {
				return <DropDown key={index} title={category.name} items={[]} onDelete={this.removeCategory.bind(this,index)}/>
			});

			let collectionElementList = this.state.collections.map((collection, index) => {
				return <DropDown key={index} title={collection.name} items={[]} onDelete={this.removeCollection.bind(this,index)}/>
			});

			let selectItems = this.state.categories.map((category, index) => {
				return <option key={index} value={category.name}> {category.name } </option>
			});

			if(this.state.isLoading){
				return (<Loader/>);
			}
			return <div  className="row">
				<div className="col-lg-6 background_gray p50 m0 maximum-height">
					<div className="col-lg-12 p0"><h2>Add Category</h2></div>

					<div className="row ui form mT20">
						<div className="col-lg-8"><input type="text" ref="category" placeholder="Enter category name"/></div>
						<div className="col-lg-4"><button className="fluid ui secondary button" onClick={this.addCategory.bind(this)}>Add Category</button></div>
					</div>
					<br/>
					<br/>
					<hr/>
					<br/>
					<br/>
					<div className="col-lg-12 p0"><h2>Add Collection</h2></div>
					<div className="row ui form mT20">
						<div className="col-lg-6"><input type="text"  ref="collectionName" placeholder="Enter collection name"/></div>
						<div className="col-lg-6">
							<select type="text" className="ui fluid dropdown" ref="categorySelected">
								<option value="">Select Parent Category</option>
								{ selectItems }
							</select>
							</div>
					</div>
					<div className="row ui form mT20">
					<div className="col-lg-12">
						<button className="ui secondary button" onClick={this.addCollection.bind(this)}>Add Collection</button>
					</div>
					</div>
					<br/>
					<br/>
					<hr/>
				</div>
				<div className="col-lg-6 p0">
				
					<div className="p50">
					
					<div className="col-lg-12">
					<div className="col-lg-12 p0"><h2>Categories</h2></div>
					<div className="mT20"></div>
					{ categoryElementList.length && categoryElementList || "No categories added"}
					</div>
					<div className="mT20"></div>
					<hr/>
					<div className="col-lg-12 mT30">
					<div className="col-lg-12 p0"><h2>Collections</h2></div>
					<div className="mT20"></div>
						{ collectionElementList.length && collectionElementList || "No collections added"}
					</div>


					</div>
				</div>
			</div>
		}
	}