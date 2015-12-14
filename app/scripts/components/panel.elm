import Html                             exposing (..)
import Html.Attributes                  exposing (..)

main =
    div [ class "panel" ]
        [ div [ class "panel__title" ] [ text "This is a title" ]
        , div [ class "panel__timestamp" ] [ ]
        , img [ class "panel__image" ] [ ]
        , p [ class "panel__description" ] [ ]
        ]
