import React from 'react';

import { Text } from '@/components/atoms/Text';

import { Container, Title, Subtitle, SectionItem } from './styles';

interface PrivacyPolicyProps {
  children?: React.ReactNode;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = () => {
  return (
    <Container>
      <Title color="black">Política de privacidade</Title>

      <Subtitle color="neutralGray700" size="xl" weight="bold" maxWidth="300px">
        POLÍTICA DE PRIVACIDADE HUBLIE TECNOLOGIA LTDA
      </Subtitle>

      <SectionItem color="neutralGray700" size="lg">
        <h2>
          A HUBLIE tem como prioridade a proteção dos dados pessoais, mantendo
          todos os aspectos devidos de segurança e{' '}
        </h2>

        <p>
          privacidade. Também, nos comprometemos com a transparência do processo
          de tratamento de dados pessoais dos nossos stakeholders. Por isso, a
          presente Política de Privacidade estabelece como é feita a coleta, uso
          e transferência de informações de clientes ou outras pessoas que
          acessam ou usam nosso site.
        </p>
      </SectionItem>

      <SectionItem color="neutralGray700" size="lg">
        <h2>
          Ao utilizar nossos serviços, você entende que coletamos e usamos suas
          informações pessoais nas formas descritas{' '}
        </h2>

        <p>
          nesta Política, sob as normas de Proteção de Dados (LGPD, Lei Federal
          13.709/2018), das disposições consumeristas da Lei Federal 8078/1990 e
          as demais normas do ordenamento jurídico brasileiro aplicáveis.
        </p>
      </SectionItem>

      <SectionItem color="neutralGray700" size="lg">
        <h2>
          Dessa forma, A HUBLIE, inscrita no CNPJ/MF sob o nº
          19.659.585/0001-84, doravante denominada simplesmente{' '}
        </h2>

        <p>
          como HUBLIE TECNOLOGIA LTDA, no papel de Controladora de Dados,
          obriga-se ao disposto na presente Política de Privacidade.
        </p>
      </SectionItem>

      <Text color="neutralGray700" size="2xl" weight="bold">
        <h2>Quais dados coletamos sobre você e para qual finalidade?</h2>
      </Text>

      <SectionItem color="neutralGray700" size="lg">
        <h2>
          Nosso site coleta e utiliza alguns dados pessoais seus, de forma a
          viabilizar a prestação de serviços e aprimorar a{' '}
        </h2>

        <p>experiência de uso.</p>
      </SectionItem>

      <SectionItem color="neutralGray700" size="lg">
        <h2>Dados pessoais fornecidos pelo titular.</h2>

        <div>
          <h2>
            A - Dados fornecidos pelos usuários (informações de contato, dados
            profissionais, informações financeiras ou{' '}
          </h2>

          <p>técnicas.)</p>
        </div>

        <div>
          <h2>
            B - Dados de navegação (ex.: endereço IP, localização, país, tempo
            de navegação, tempo de acesso) ou dados que{' '}
          </h2>

          <p>surjam de sua interação com nosso site;</p>
        </div>

        <div>
          <h2>C - Cookies e sistemas de rastreamento da Internet;</h2>
        </div>

        <div>
          <h2>
            D - Informações sobre a convicção religiosa do usuário são coletadas
            no momento em que ele preenche seu cadastro.
          </h2>
        </div>
      </SectionItem>

      <Text color="neutralGray700" size="2xl" weight="bold">
        <h2>Consentimento</h2>
      </Text>

      <SectionItem color="neutralGray700" size="lg">
        <h2>
          É a partir do seu consentimento que tratamos os seus dados pessoais. O
          consentimento é a manifestação livre,{' '}
        </h2>

        <p>informada e inequívoca pela qual você autoriza </p>

        <h2>A HUBLIE TECNOLOGIA</h2>

        <p> LTDA a tratar seus dados.</p>

        <br />

        <p>
          Assim, em consonância com a Lei Geral de Proteção de Dados, seus dados
          só serão coletados, tratados e armazenados mediante prévio e expresso
          consentimento.
        </p>

        <br />

        <h2>
          O seu consentimento será obtido de forma específica para cada
          finalidade acima descrita, evidenciando o compromisso{' '}
        </h2>

        <p>
          de transparência e boa-fé da HUBLIE TECNOLOGIA LTDA para com seus
          usuários/clientes, seguindo as regulações legislativas pertinentes.
        </p>

        <br />

        <h2>
          Ao utilizar os serviços da HUBLIE TECNOLOGIA LTDA e fornecer seus
          dados pessoais, você está ciente e{' '}
        </h2>

        <p>
          consentindo com as disposições desta Política de Privacidade, além de
          conhecer seus direitos e como exercê-los.
        </p>

        <br />

        <h2>
          A qualquer tempo e sem nenhum custo, você poderá revogar seu
          consentimento. É importante destacar que a revogação do consentimento
          para o tratamento dos dados pode implicar a impossibilidade{' '}
        </h2>

        <p>
          da performance adequada de alguma funcionalidade do site que dependa
          da operação. Tais consequências serão informadas previamente.
        </p>
      </SectionItem>

      <Text color="neutralGray700" size="2xl" weight="bold">
        <h2>Quais são os seus direitos?</h2>
      </Text>

      <SectionItem color="neutralGray700" size="lg">
        <h2>
          A HUBLIE TECNOLOGIA LTDA assegura a seus usuários/clientes seus
          direitos de titular previstos no artigo 18 da{' '}
        </h2>

        <p>
          Lei Geral de Proteção de Dados. Dessa forma, você pode, de maneira
          gratuita e a qualquer tempo:
        </p>

        <div>
          <h2>
            A - Confirmar a existência de tratamento de dados, de maneira
            simplificada ou em formato claro e completo;
          </h2>
        </div>

        <div>
          <h2>
            B - Acessar seus dados, podendo solicitá-los em uma cópia legível
            sob forma impressa ou por meio eletrônico, seguro{' '}
          </h2>

          <p>e idôneo;</p>
        </div>

        <div>
          <h2>
            C - Corrigir seus dados, ao solicitar a edição, correção ou
            atualização destes;
          </h2>
        </div>

        <div>
          <h2>
            D - Limitar seus dados quando desnecessários, excessivos ou tratados
            em desconformidade com a legislação através{' '}
          </h2>

          <p>da anonimização, bloqueio ou eliminação;</p>
        </div>

        <div>
          <h2>
            E - Solicitar a portabilidade de seus dados, através de um relatório
            de dados cadastrais que A HUBLIE{' '}
          </h2>

          <p>TECNOLOGIA LTDA trata a seu respeito;</p>
        </div>

        <div>
          <h2>
            F - Eliminar seus dados tratados a partir de seu consentimento,
            exceto nos casos previstos em lei;
          </h2>
        </div>

        <div>
          <h2>
            G - Revogar seu consentimento, desautorizando o tratamento de seus
            dados;
          </h2>
        </div>

        <div>
          <h2>
            H - Informar-se sobre a possibilidade de não fornecer seu
            consentimento e sobre as consequências da negativa;
          </h2>
        </div>
      </SectionItem>

      <Text color="neutralGray700" size="2xl" weight="bold">
        <h2>Como você pode exercer seus direitos de titular?</h2>
      </Text>

      <SectionItem color="neutralGray700" size="lg">
        <h2>
          Para exercer seus direitos de titular, você deve entrar em contato com
          A HUBLIE TECNOLOGIA LTDA através dos{' '}
        </h2>

        <p>seguintes meios disponíveis:</p>

        <div>
          <h2>A - Via e-mail;</h2>
        </div>

        <div>
          <h2>B - Telefone</h2>
        </div>

        <h2>
          De forma a garantir a sua correta identificação como titular dos dados
          pessoais objeto da solicitação, é possível que{' '}
        </h2>

        <p>
          solicitemos documentos ou demais comprovações que possam comprovar sua
          identidade. Nessa hipótese, você será informado previamente.
        </p>
      </SectionItem>

      <Text color="neutralGray700" size="2xl" weight="bold">
        <h2>Como e por quanto tempo seus dados serão armazenados?</h2>
      </Text>

      <SectionItem color="neutralGray700" size="lg">
        <h2>
          Seus dados pessoais coletados serão utilizados e armazenados durante o
          tempo necessário para a prestação do serviço{' '}
        </h2>

        <p>
          ou para que as finalidades elencadas na presente Política de
          Privacidade sejam atingidas, considerando os direitos dos titulares
          dos dados e dos controladores.
        </p>

        <br />

        <h2>
          De modo geral, seus dados serão mantidos enquanto a relação contratual
          entre você e A HUBLIE TECNOLOGIA{' '}
        </h2>

        <p>
          LTDA perdurar. Findado o período de armazenamento dos dados pessoais,
          estes serão excluídos de nossas bases de dados ou anonimizados,
          ressalvadas as hipóteses legalmente previstas no artigo 16 da Lei
          Geral de Proteção de Dados, a saber:
        </p>

        <div>
          <h2>
            A - Cumprimento de obrigação legal ou regulatória pelo controlador;
          </h2>
        </div>

        <div>
          <h2>
            B - Estudo por órgão de pesquisa, garantida, sempre que possível, a
            anonimização dos dados pessoais;
          </h2>
        </div>

        <div>
          <h2>
            C - Transferência a terceiro, desde que respeitados os requisitos de
            tratamento de dados dispostos nesta Lei; ou
          </h2>
        </div>

        <div>
          <h2>
            D - Uso exclusivo do controlador, vedado seu acesso por terceiro, e
            desde que anonimizados os dados.
          </h2>
        </div>

        <h2>
          Isto é, informações pessoais sobre você que sejam imprescindíveis para
          o cumprimento de determinações legais,{' '}
        </h2>

        <p>
          judiciais e administrativas e/ou para o exercício do direito de defesa
          em processos judiciais e administrativos serão mantidas, a despeito da
          exclusão dos demais dados.
        </p>

        <br />

        <h2>
          O armazenamento de dados coletados reflete o nosso compromisso com a
          segurança e privacidade dos seus dados.
        </h2>

        <br />

        <h2>
          Empregamos medidas e soluções técnicas de proteção aptas a garantir a
          confidencialidade, integridade e
        </h2>

        <p>
          inviolabilidade dos seus dados. Além disso, também contamos com
          medidas de segurança apropriadas aos riscos e com controle de acesso
          às informações armazenadas.
        </p>
      </SectionItem>

      <Text color="neutralGray700" size="2xl" weight="bold">
        <h2>O que fazemos para manter seus dados seguros?</h2>
      </Text>

      <SectionItem color="neutralGray700" size="lg">
        <h2>
          Para mantermos suas informações pessoais seguras, usamos ferramentas
          físicas, eletrônicas e gerenciais orientadas{' '}
        </h2>

        <p>para a proteção da sua privacidade.</p>

        <br />

        <h2>
          Aplicamos essas ferramentas levando em consideração a natureza dos
          dados pessoais coletados, o contexto e a{' '}
        </h2>

        <p>
          finalidade do tratamento e os riscos que eventuais violações geram
          para os direitos e liberdades do titular dos dados coletados e
          tratados.
        </p>

        <br />

        <h2>Entre as medidas que adotamos, destacamos as seguintes:</h2>

        <div>
          <h2>
            A - Apenas pessoas autorizadas têm acesso a seus dados pessoais
          </h2>
        </div>

        <div>
          <h2>
            B - O acesso a seus dados pessoais é feito somente após o
            compromisso de confidencialidade
          </h2>
        </div>

        <div>
          <h2>
            C - Seus dados pessoais são armazenados em ambiente seguro e idôneo.
          </h2>
        </div>

        <h2>
          A HUBLIE TECNOLOGIA LTDA se compromete em adotar as melhores posturas
          para evitar incidentes de{' '}
        </h2>

        <p>
          segurança. Contudo, é necessário destacar que nenhuma página virtual é
          inteiramente segura e livre de riscos. É possível que, apesar de todos
          os nossos protocolos de segurança, problemas de culpa exclusivamente
          de terceiros
        </p>

        <br />

        <h2>
          ocorram, como ataques cibernéticos de hackers, ou também em
          decorrência da negligência ou imprudência do próprio
        </h2>

        <br />

        <h2>
          Empregamos medidas e soluções técnicas de proteção aptas a garantir a
          confidencialidade, integridade e{' '}
        </h2>

        <p>usuário/cliente.</p>

        <br />

        <h2>
          Em caso de incidentes de segurança que possa gerar risco ou dano
          relevante para você ou qualquer um de nossos{' '}
        </h2>

        <p>
          usuários/clientes, comunicaremos aos afetados e a Autoridade Nacional
          de Proteção de Dados sobre o ocorrido, em consonância com as
          disposições da Lei Geral de Proteção de Dados.
        </p>
      </SectionItem>

      <Text color="neutralGray700" size="2xl" weight="bold">
        <h2>Com quem seus dados podem ser compartilhados?</h2>
      </Text>

      <SectionItem color="neutralGray700" size="lg">
        <h2>
          Tendo em vista a preservação de sua privacidade, A HUBLIE TECNOLOGIA
          LTDA não compartilhará seus dados{' '}
        </h2>

        <p>pessoais com nenhum terceiro não autorizado.</p>

        <br />

        <h2>
          Seus dados poderão ser compartilhados com futuros parceiros
          comerciais, onde informaremos quais dados serão{' '}
        </h2>

        <p>compartilhados e com quem iremos compartilhar.</p>

        <br />

        <h2>
          Estes receberão os seus dados apenas na medida do necessário para a
          prestação dos serviços contratados e nossos
        </h2>

        <p>
          contratos são orientados pelas normas de proteção de dados do
          ordenamento jurídico brasileiro.
        </p>

        <br />

        <h2>
          Todavia, nossos parceiros têm suas próprias Políticas de Privacidade,
          que podem divergir desta. Recomendamos a{' '}
        </h2>

        <p>leitura desses documentos.</p>

        <br />

        <h2>
          Além disso, também existem outras hipóteses em que seus dados poderão
          ser compartilhados, que são:
        </h2>

        <div>
          <h2>
            A - Determinação legal, requerimento, requisição ou ordem judicial,
            com autoridades judiciais, administrativas ou{' '}
          </h2>

          <p>governamentais competentes.</p>
        </div>

        <div>
          <h2>
            B - Caso de movimentações societárias, como fusão, aquisição e
            incorporação, de forma automática
          </h2>
        </div>

        <div>
          <h2>
            C - Proteção dos direitos da (nome empresarial simplificado) em
            qualquer tipo de conflito, inclusive os de teor judicial.
          </h2>
        </div>
      </SectionItem>

      <Text color="neutralGray700" size="2xl" weight="bold">
        <h2>Transferência internacional de dados;</h2>
      </Text>

      <SectionItem color="neutralGray700" size="lg">
        <h2>
          Alguns dos terceiros com quem compartilhamos seus dados podem ser
          localizados ou possuir instalações localizadas{' '}
        </h2>

        <p>
          em países estrangeiros. Nessas condições, de toda forma, seus dados
          pessoais estarão sujeitos à Lei Geral de Proteção de Dados e às demais
          legislações brasileiras de proteção de dados
        </p>

        <br />

        <h2>
          Nesse sentido, A HUBLIE TECNOLOGIA LTDA se compromete a sempre adotar
          eficientes padrões de segurança{' '}
        </h2>

        <p>
          cibernética e de proteção de dados, nos melhores esforços de garantir
          e cumprir as exigências legislativas.
        </p>

        <br />

        <h2>
          Ao concordar com essa Política de Privacidade, você concorda com esse
          compartilhamento, que se dará conforme as
        </h2>

        <p>finalidades descritas no presente instrumento.</p>
      </SectionItem>

      <Text color="neutralGray700" size="2xl" weight="bold">
        <h2>Cookies ou dados de navegação</h2>
      </Text>

      <SectionItem color="neutralGray700" size="lg">
        <h2>
          A HUBLIE TECNOLOGIA LTDA faz uso de Cookies, que são arquivos de texto
          enviados pela plataforma ao seu{' '}
        </h2>

        <p>
          computador e que nele se armazenam, que contém informações
          relacionadas à navegação do site. Em suma, os Cookies são utilizados
          para aprimorar a experiência de uso.
        </p>

        <br />

        <h2>
          Ao acessar nosso site e consentir com o uso de Cookies, você manifesta
          conhecer e aceitar a utilização de um sistema{' '}
        </h2>

        <p>
          de coleta de dados de navegação com o uso de Cookies em seu
          dispositivo.
        </p>

        <br />

        <h2>
          Você pode, a qualquer tempo e sem nenhum custo, alterar as permissões,
          bloquear ou recusar os Cookies. Todavia, a{' '}
        </h2>

        <p>
          revogação do consentimento de determinados Cookies pode inviabilizar o
          funcionamento correto de alguns recursos da plataforma.
        </p>

        <br />

        <h2>
          Para gerenciar os cookies do seu navegador, basta fazê-lo diretamente
          nas configurações do navegador, na área de{' '}
        </h2>

        <p>
          gestão de Cookies. Você pode acessar tutoriais sobre o tema
          diretamente nos links abaixo:
        </p>

        <br />

        <h2>
          Se você usa o <ins>Internet Explorer</ins>.
        </h2>

        <br />

        <h2>
          Se você usa o <ins>Firefox</ins>.
        </h2>

        <br />

        <h2>
          Se você usa o <ins>Safari</ins>.
        </h2>

        <br />

        <h2>
          Se você usa o <ins>Google Chrome</ins>.
        </h2>

        <br />

        <h2>
          Se você usa o <ins>Microsoft Edge</ins>.
        </h2>

        <br />

        <h2>
          Se você usa o <ins>Opera</ins>.
        </h2>
      </SectionItem>

      <Text color="neutralGray700" size="2xl" weight="bold">
        <h2>Alteração desta Política de Privacidade</h2>
      </Text>

      <SectionItem color="neutralGray700" size="lg">
        <h2>
          A atual versão da Política de Privacidade foi formulada e atualizada
          pela última vez em: 04/06/2021.
        </h2>

        <br />

        <h2>
          Reservamos o direito de modificar essa Política de Privacidade a
          qualquer tempo, principalmente em função da
        </h2>

        <p>
          adequação a eventuais alterações feitas em nosso site ou em âmbito
          legislativo. Recomendamos que você a revise com frequência.
        </p>

        <br />

        <h2>
          Eventuais alterações entrarão em vigor a partir de sua publicação em
          nosso site e sempre lhe notificaremos acerca das{' '}
        </h2>

        <p>mudanças ocorridas.</p>

        <br />

        <h2>
          Ao utilizar nossos serviços e fornecer seus dados pessoais após tais
          modificações, você às consente.
        </h2>
      </SectionItem>

      <Text color="neutralGray700" size="2xl" weight="bold">
        <h2>Responsabilidade</h2>
      </Text>

      <SectionItem color="neutralGray700" size="lg">
        <h2>
          A HUBLIE TECNOLOGIA LTDA prevê a responsabilidade dos agentes que
          atuam nos processos de tratamento de{' '}
        </h2>

        <p>
          dados, em conformidade com os artigos 42 ao 45 da Lei Geral de
          Proteção de Dados.
        </p>

        <br />

        <h2>
          Nos comprometemos em manter esta Política de Privacidade atualizada,
          observando suas disposições e zelando por{' '}
        </h2>

        <p>seu cumprimento.</p>

        <br />

        <h2>
          Além disso, também assumimos o compromisso de buscar condições
          técnicas e organizativas seguras aptas a proteger{' '}
        </h2>

        <p>todo o processo de tratamento de dados.</p>

        <br />

        <h2>
          Caso a Autoridade Nacional de Proteção de Dados exija a adoção de
          providências em relação ao tratamento de dados
        </h2>

        <p>realizado pela nossa organização, comprometemo-nos a segui-las.</p>
      </SectionItem>

      <Text color="neutralGray700" size="2xl" weight="bold">
        <h2>Isenção de responsabilidade</h2>
      </Text>

      <SectionItem color="neutralGray700" size="lg">
        <h2>
          Conforme mencionado no Tópico 6, embora adotemos elevados padrões de
          segurança a fim de evitar incidentes, não{' '}
        </h2>

        <p>
          há nenhuma página virtual inteiramente livre de riscos. Nesse sentido,
          A HUBLIE TECNOLOGIA LTDA não se responsabiliza por:
        </p>

        <div>
          <h2>
            A - Quaisquer consequências decorrentes da negligência, imprudência
            ou imperícia dos usuários em relação a seus{' '}
          </h2>

          <p>
            dados individuais. Garantimos e nos responsabilizamos apenas pela
            segurança dos processos de tratamento de dados e do cumprimento das
            finalidades descritas no presente instrumento.
          </p>
        </div>

        <div>
          <h2>
            B - Destacamos que a responsabilidade em relação à confidencialidade
            dos dados de acesso é do usuário.
          </h2>
        </div>

        <div>
          <h2>
            C - Ações maliciosas de terceiros, como ataques de hackers, exceto
            se comprovada conduta culposa ou deliberada da{' '}
          </h2>

          <p>HUBLIE TECNOLOGIA LTDA;</p>
        </div>

        <div>
          <h2>
            D - Destacamos que em caso de incidentes de segurança que possam
            gerar risco ou dano relevante para você ou{' '}
          </h2>

          <p>
            qualquer um de nossos usuários/clientes, comunicaremos aos afetados
            e à Autoridade Nacional de Proteção de Dados sobre o ocorrido e
            cumpriremos as providências necessárias.
          </p>
        </div>

        <div>
          <h2>
            E - Inveracidade das informações inseridas pelo usuário/cliente nos
            registros necessários para a utilização dos serviços{' '}
          </h2>

          <p>
            da HUBLIE TECNOLOGIA LTDA; quaisquer consequências decorrentes de
            informações falsas ou inseridas de má-fé são de inteiramente
            responsabilidade do usuário/cliente.
          </p>
        </div>
      </SectionItem>

      <Text color="neutralGray700" size="2xl" weight="bold">
        <h2>11) Encarregado de Proteção de Dados</h2>
      </Text>

      <SectionItem color="neutralGray700" size="lg">
        <h2>
          A HUBLIE TECNOLOGIA LTDA disponibiliza os seguintes meios para que
          você possa entrar em contato conosco{' '}
        </h2>

        <p>para exercer seus direitos de titular:</p>

        <div>
          <h2>
            (11) 96333-0054
            <br /> Nome do DPO responsável de dados:{' '}
          </h2>

          <p>Jonathas Silva Oliveira</p>
        </div>

        <h2>
          Caso tenha dúvidas sobre esta Política de Privacidade ou sobre os
          dados pessoais que tratamos, você pode entrar em{' '}
        </h2>

        <p>
          contato com o nosso Encarregado de Proteção de Dados Pessoais, através
          dos seguintes canais:
        </p>

        <div>
          <h2>E-mail do DPO: </h2>

          <p>dpo@hublie.io</p>

          <br />

          <h2>Telefone comercial do DPO: 1132150440</h2>

          <br />

          <h2>Telefone da organização: (11) 96333-0054</h2>

          <br />

          <h2>Nome do DPO responsável de dados: </h2>

          <p>Jonathas Silva Oliveira</p>
        </div>
      </SectionItem>
    </Container>
  );
};
