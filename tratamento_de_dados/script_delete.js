async function confirmarExclusao(x) {

      console.log(x) 

      console.log(typeof(x))

      let id = '25' 
      //document.getElementById(aula_id).value  
      
      let aluno = 'Afonso'
      //document.getElementById(aluno_id).value


      if (confirm('Deseja realmente DELETAR a aula?')) {

        try {

          const response = await fetch(`/deletar/aula/${id}/${aluno}`, {
            method: 'DELETE',

          });
          if (response.ok) {

            alert('Aula exluída com sucesso!');

            //window.location.reload()

          }
        }
        catch (err) {
          console.error('Erro ao excluir', err)
        };
      }
   }  