/******INTRO MODULE******/

import ReactTooltip from "react-tooltip";

/***COMPONENTS***/
import { checkWidth2 } from "../components/Appendix";

/***COMPONENT***/
export default function Intro(data) {
  /*DOM*/
  return (
    <section id="intro">
      <div className="intro" id="thisToggle">
        <div className="introLeft">
          {/*Large Animated Logo*/}
          <img
            fetchpriority="high"
            src={
              data.data1.UimgLinks.IL0 +
              data.data1.ressources.logo2 +
              data.data1.UimgLinks.IL1B
            }
            className="img-responsive logoFull"
            alt={"Logo de " + data.data1.nom}
          />{" "}
          {/*Introduction Text*/}
          <h1 className="text-center">
            {data.data2 ? data.data2.nda.description : "loading..."}
          </h1>
        </div>

        <div className="introRightWrapper">
          <a
            href={data.data1 ? data.data1.links.menu2L : "loading..."}
            className="page-scroll IntroLink"
          >
            <h2 className="firsth2">Nos Univers</h2>
          </a>
          {/*Universes selector*/}
          <div className="pagination2">
            {/*Dynamic creation from Json data*/}
            {data.data2.univers.map((univers, i) => (
              <a
                href={univers.link}
                key={univers.name + "a"}
                data-tip
                data-for={"Utip-" + univers.link}
              >
                <div className="aAnim">
                  <span></span>
                </div>
              </a>
            ))}
            {/*Universe slideshow links tooltips*/}
            {data.data2.univers.map(
              (univers, i) => (
                {
                  /*Dynamic creation from Json data*/
                },
                (
                  <ReactTooltip
                    id={"Utip-" + univers.link}
                    place="top"
                    animation="FadeIn"
                    data-offset="{'top':5}"
                    effect="solid"
                    textColor="#fff"
                    arrowColor="#222020"
                    /*border="true"*/
                    borderColor="#2CC78E"
                    effect="solid"
                    backgroundColor="#222020"
                    key={"tipFor-" + univers.link}
                  >
                    {univers.name}
                  </ReactTooltip>
                )
              ),
            )}
          </div>
          {/*Display last books*/}
          <div className="introRight">
            {/*Number of books diplayed in intro component depending on window width*/}
            {checkWidth2(data)}
          </div>
        </div>

        <div className="introRightWrapperGoodbye">
          <h2>Bonjour à toutes et à tous</h2>

          <h2 className="secondH2">
            Après six années à défendre une littérature féministe, humaniste,
            marginale et sombre, Noir d’Absinthe arrive au bout de son épopée.
          </h2>

          <p>
          <strong>
            Nous avons en effet décidé de fermer la maison d’édition
            </strong>, pour
            plusieurs raisons. Il y a celle, évidente, des finances : lorsque
            l’on est indépendantes dans le monde du livre, il est quasi
            impossible de s’en sortir, surtout dans une littérature de niche.
            Nous avons tenu six ans, et c’est déjà beaucoup dans ce milieu.
          </p>
          <p>
            Mais la vraie raison, qui en découle, est celle du feu. Tenir une
            maison d’édition demande une énergie de tous les instants, un
            engagement total, une motivation permanente, et c’est difficile à
            maintenir dans un cadre si peu valorisé, dans lequel on donne toute
            sa force pour à peine vivoter. Et encore…
          </p>
          <p>
            Nous préférons fermer avant de devenir amères, avant de perdre le
            sens de ce que nous faisons, avant d’oublier que tout cela, c’est
            pour l’Art et l’Art seul. La misère du monde de la culture a cet
            effet délétère : avec le temps, on se demande comment on va passer
            le mois, non plus comment on va toucher des âmes.
          </p>
          <p>
            Il n’était pas question de s’oublier. La maison d’édition était un
            moyen de transmettre de l’Art, mais ce n’était pas une fin en soi.
            L’Art que nous avons partagé est toujours là, les esprits que nous
            avons touchés avec nos mots se souviennent, les œuvres sont loin
            d’être parties.
          </p>
          <p>
            Nous fermons donc par choix, avec la fierté d’avoir été authentiques
            et vraies, depuis les prémices jusqu’à aujourd’hui, de ne jamais
            avoir baissé les bras, de n’avoir accepté nul compromis.

          <strong>

            Nous
            fermons, oui, mais debout.
                      </strong>
          </p>
          <p>
          <strong>

            Nous tenons à remercier toutes celles et ceux qui nous ont soutenues
            toutes ces années
          </strong>

            . Les lectrices et lecteurs qui ont cru en nous et
            ont donné une chance, une vie à nos textes. Les blogueuses et
            blogueurs qui ont valorisé notre catalogue avec ferveur. Les
            stagiaires qui nous ont tant aidées. Les salons qui nous ont reçues,
            mêmes quand nous n’étions pas connues. Les autres maisons d’édition
            qui nous ont accueillies avec respect dans le milieu de
            l’imaginaire. Les artistes, de Noir d’Absinthe ou non, qui ont parlé
            de nous et nous ont mis en avant. Les institutions, surtout en
            Bretagne, qui ont soutenu par leurs conseils et leurs subventions
            notre structure.
          </p>
          <p>
            Noir d’Absinthe ferme, et c’est un échec, non pas personnel – nous
            avons tout donné – mais de notre société, de la culture, de cet
            environnement capitaliste où l’Art, le vrai, est une monnaie. Ce
            combat pour proposer de la littérature impactante et puissante n’est
            pas terminé, et nos artistes-auteurs continueront d’écrire et de
            publier, en autoédition ou bien chez d’autres maisons d’édition, et
            nous continuerons de faire valoir notre Art.
          </p>
          <p>
            D’un point de vue plus pratique, 
          <strong>

            tout le catalogue reste disponible
            jusqu’à la fin février
          </strong>

            , après quoi les livres ne pourront plus être
            commandés sur le site Internet et les libraires ne pourront plus se
            réapprovisionner auprès de notre imprimeur. Vos dernières commandes
            nous aideront à financer la fermeture de l’entreprise, qui coûte
            cher hélas, et de donner un coup de pouce à nos artistes.
          </p>
          <p>
          <strong>

            Enfin, 
            nous proposons tous les titres du catalogue en numérique à
            prix libre
          </strong>


            . Cela vous permettra d’acquérir nos titres tant qu’ils
            sont disponibles et à nous de diffuser nos œuvres un maximum dans ce
            dernier mois. Notre lectorat nous a soutenu et nous a fait tenir
            toutes ces années, et nous souhaitons une dernière fois vous faire
            confiance et vous offrir votre art. Si vous n’avez pas pu vous
            offrir certains de nos titres pour des raisons économiques, ce sera
            l’occasion. Si vous voulez nous soutenir et nous aider à passer ce
            cap, c’est l’occasion aussi.
          </p>
          <p className="finalWord">
            Nous vous faisons entièrement confiance, comme vous nous avez fait
            confiance pendant six ans.
          </p>
        </div>
      </div>
    </section>
  );
}
