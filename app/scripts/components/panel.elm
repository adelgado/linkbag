import Html                             exposing (..)
import Html.Attributes                  exposing (..)

main =
    let
        title = "This is a title"
        imageUrl =
            "http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg"
        dateCreated = "1st of October of 1845"
        description = "This was something that happened once because of bla and"
    in
        section
            [ class "panel" ]
            [ img [ class "panel__image", src imageUrl ] [ ]
            , h2 [ class "panel__title" ] [ text title ]
            , time [ class "panel__timestamp" ] [ text dateCreated ]
            , p [ class "panel__description" ]
                [ text description ]
            ]

