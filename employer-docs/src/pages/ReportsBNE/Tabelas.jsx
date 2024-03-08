import React from 'react'

const Tabelas = () => {
  return (
    <div className='grid'>
      <div className='conteudo'>
      ### **Tabela de pessoa física**

**Nome da tabela:** TAB_Pessoa_Fisica

**Descrição:** Tabela para armazenar informações de pessoas cadastradas no BNE.

**Caminho da modelagem:** Models/PessoaFisicalModel.cs

---

### **Tabela de usuário filial perfil**

**Nome da tabela:** TAB_Usuario_Filial_Perfil

**Caminho da modelagem:** Models/UsuarioFilialPerfilModel.cs

**Descrição:** Armazena dados do usuário filial perfil.

**Faz relação com as seguintes tabelas:**

- Tabela de pessoa física

---

### **Tabela de situação do plano**

**Nome da tabela:** BNE_Plano_Situacao

**Descrição:** Armazena os tipos de situações possíveis que um plano pode ficar.

**Caminho da modelagem:** Models/PlanoSituacaoModel.cs

---

### **Tabela do plano adquirido**

**Nome:** BNE_Plano_Adquirido

**Descrição:** Armazena informações do plano adquirido pelo o usuário.

**Caminho de modelagem:** Models/PlanoAdquiridoModel.cs

**Faz relação com as seguintes tabelas:**

- Tabela de situação do plano

---

### Tabela de motivos de cancelamento

**Nome:** BNE_Motivo_Cancelamento

**Descrição:** Armazena as descrições de motivo de cancelamento dos planos.

**Caminho de modelagem:** Models/MotivoCancelamentoModel.cs

---

### Tabela de planos cancelados

**Nome:** BNE_Plano_Motivo_Cancelamento

**Descrições:** Armazena os planos cancelados.

**Caminho da modelagem:** Models/PlanoMotivoCancelamentoModel.cs

**Faz relação com as seguintes tabelas:**

- Tabela de usuário filial perfil
- Tabela de plano adquirido
- Tabela de motivos de cancelamento

## Conexão

A conexão é feita usando o Entity Framwork da Microsoft.

***Onde encontrar o contexto do banco de dados:*** Data/Context.cs

***Onde encontrar a string de conexão:*** appsettings.json

A string de conexão está dentro da chave *“ConnectionsStrings”* , temos duas conexões sendo a master e a BD_HOM.

A master contem a string de conexão para a base de dados de produção onde tem os dados mais atualizados.

A BD_HOM contem a string de conexão da base de dados para teste que é a que **deve** ser **usada.**
      </div>
    </div>
  )
}

export default Tabelas