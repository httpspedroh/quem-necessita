let divCarInd = document.getElementById('car_indicator'),
    divCarImgs = document.getElementById('car_imgs'),
    divCarInst = document.getElementById('inst_carrossel');

loadImgs();
loadInsts();

// ----------------------------------------------------------------------------------------------------------------------------------- //

function loadImgs() 
{
    let divButtonsControl = document.getElementById('btns_control');

    if(getUserLogged() == -1) divButtonsControl.style.display = 'none';
    else divButtonsControl.innerHTML = `<div id="btns_control" class="camp_controle container-fluid">
         <div class="row">
             <span class="col-6 text-right"><button class="btn btn_campAdd"><i class="fas fa-plus"></i>Adicionar imagem</button></span>
             <span class="col-6 text-left"><button class="btn btn_campExcluir"><i class="fas fa-trash"></i>Excluir imagem</button></span>
         </div>
     </div>`;

    // --------------- //

    let textoInd = '',
        textoImg = '';

    // Montar um bloco de informações para cada instituição
    for(i = 0; i < imgs.length; i++) {

        let imgInfo = imgs[i];

        if(i == 0) 
        {
            textoInd += `<li data-target="#carouselExampleIndicators" data-slide-to="${i}" class="active"></li>`;
            textoImg += `<div class="carousel-item active">
                            <img class="d-block w-100" src="${imgInfo.href}" alt="${imgInfo.alt}">
                        </div>`;
        }
        else
        {
            textoInd += `<li data-target="#carouselExampleIndicators" data-slide-to="${i}"></li>`;
            textoImg += `<div class="carousel-item">
                            <img class="d-block w-100" src="${imgInfo.href}" alt="${imgInfo.alt}">
                        </div>`;
        }

        divCarInd.innerHTML = textoInd;
        divCarImgs.innerHTML = textoImg;
    };
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function setClickInst(id) 
{
    sessionStorage.setItem('id_clickInst', id);
    location.href = "instituicao.html";
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function loadInsts() 
{
    let texto = '';

    // Montar um bloco de informações para cada instituição
    for(i = 0; i < instituicoes.length; i++) {

        let instInfo = instituicoes[i];

        if(i == 0) texto += `<div class="carousel-item active">`;
        else texto += `<div class="carousel-item">`;

        texto +=
            `<span class="inst_info">
                <img src="${instInfo.logo}" alt="${instInfo.nome}" width="200" height="200">
                <h5>${instInfo.nome}</h5>
                <h6>
                    <b>Contato:</b> ${instInfo.telefone}<br>
                    <b>Endereço:</b> ${instInfo.endereco}<br>
                    <b>Categoria:</b> ${instInfo.categoria}
                </h6>
                <button type="button" class="btn inst_saibaMais" onclick="setClickInst(${i})"><i class="fas fa-plus"></i>Saiba mais</button>
            </span>
        </div>`;
    };

    // Preencher a DIV com o texto HTML
    divCarInst.innerHTML = texto;
}