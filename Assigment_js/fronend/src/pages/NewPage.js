import NewAPI from '../api/NewAPI';

const NewPage ={
    async render(){
        const {data: news} = await NewAPI.getAll();

        return /*html*/`
            <div class="content content_news">
                <div class="container col-12">
                    ${
                        news.map(result=>{
                            return /*html*/`
                                <div class="row ">
                                    <div class="col-xl-3 col-lg-4 col-md-4 col-sm-4">
                                        <img src="${result.image}" alt="" class="mx-auto" style="width: 100%;">
                                    </div>
                                    <div class="col-xl-9 col-lg-8 col-md-8 col-sm-8">
                                    <a href="/#/new/${result.id}">
                                        <h4 class="text-title">${result.name}</h4>
                                    </a>
                                        <p>${result.description}</p>
                                    </div>

                                </div>
                            `

                        }).join("")
                    }
                </div>
            </div>
        
            `;
    },
    async afterRender(){
        return ``;
    }
    
}
export default NewPage;