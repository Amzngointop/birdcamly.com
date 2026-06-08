#!/usr/bin/env bash
# Run this once from the project root to download all bird images locally.
# Usage: bash download-birds.sh

set -e
mkdir -p public/birds

UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"

dl() {
  local url="$1" out="$2"
  echo "Downloading $out ..."
  curl -L -A "$UA" -H "Referer: https://en.wikipedia.org/" "$url" -o "$out"
  local size
  size=$(wc -c < "$out")
  if [ "$size" -lt 5000 ]; then
    echo "  WARNING: $out looks too small ($size bytes) — may have failed"
  else
    echo "  OK ($size bytes)"
  fi
}

dl "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/American_Robin_Close_Up.jpg/400px-American_Robin_Close_Up.jpg" "public/birds/american-robin.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Poecile_atricapillus_CT.jpg/400px-Poecile_atricapillus_CT.jpg" "public/birds/black-capped-chickadee.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Cardinalis_cardinalis_-_male_-_8.jpg/400px-Cardinalis_cardinalis_-_male_-_8.jpg" "public/birds/northern-cardinal.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Downy_Woodpecker.jpg/400px-Downy_Woodpecker.jpg" "public/birds/downy-woodpecker.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/American_Goldfinch_%28Male%29.jpg/400px-American_Goldfinch_%28Male%29.jpg" "public/birds/american-goldfinch.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Blue_jay_in_PP_%2831520%29.jpg/400px-Blue_jay_in_PP_%2831520%29.jpg" "public/birds/blue-jay.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/English_sparrow_struther.jpg/400px-English_sparrow_struther.jpg" "public/birds/house-sparrow.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Starling_2_edit.jpg/400px-Starling_2_edit.jpg" "public/birds/european-starling.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Mourning_Dove_2006.jpg/400px-Mourning_Dove_2006.jpg" "public/birds/mourning-dove.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/House_Finch_%28Carpodacus_mexicanus%29_male.jpg/400px-House_Finch_%28Carpodacus_mexicanus%29_male.jpg" "public/birds/house-finch.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Song_Sparrow-27527.jpg/400px-Song_Sparrow-27527.jpg" "public/birds/song-sparrow.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Dark-eyed_Junco_-_Oregon_subspecies.jpg/400px-Dark-eyed_Junco_-_Oregon_subspecies.jpg" "public/birds/dark-eyed-junco.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/White-breasted_Nuthatch_%28Sitta_carolinensis%29.jpg/400px-White-breasted_Nuthatch_%28Sitta_carolinensis%29.jpg" "public/birds/white-breasted-nuthatch.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Ruby-throated_Hummingbird_female.jpg/400px-Ruby-throated_Hummingbird_female.jpg" "public/birds/ruby-throated-hummingbird.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Cedar_Waxwing_%28Bombycilla_cedrorum%29.jpg/400px-Cedar_Waxwing_%28Bombycilla_cedrorum%29.jpg" "public/birds/cedar-waxwing.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/American_Crow.jpg/400px-American_Crow.jpg" "public/birds/american-crow.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Red-winged_Blackbird_%28Agelaius_phoeniceus%29_male.jpg/400px-Red-winged_Blackbird_%28Agelaius_phoeniceus%29_male.jpg" "public/birds/red-winged-blackbird.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Tufted_Titmouse_%28Baeolophus_bicolor%29.jpg/400px-Tufted_Titmouse_%28Baeolophus_bicolor%29.jpg" "public/birds/tufted-titmouse.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/House_Wren_4.jpg/400px-House_Wren_4.jpg" "public/birds/house-wren.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Spizelloides_arborea_CT.jpg/400px-Spizelloides_arborea_CT.jpg" "public/birds/american-tree-sparrow.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Downy_Woodpecker.jpg/800px-Downy_Woodpecker.jpg" "public/birds/downy-woodpecker-hero.jpg"

echo ""
echo "Done. Files in public/birds/:"
ls -lh public/birds/
