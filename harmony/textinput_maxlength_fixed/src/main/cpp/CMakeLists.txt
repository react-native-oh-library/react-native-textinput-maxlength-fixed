cmake_minimum_required(VERSION 3.13)
set(CMAKE_VERBOSE_MAKEFILE on)

set(rnoh_textinput_maxlength_fixed_dir "${CMAKE_CURRENT_SOURCE_DIR}/generated")
file(GLOB_RECURSE rnoh_textinput_maxlength_fixed_SRC "${rnoh_textinput_maxlength_fixed_dir}/**/*.cpp")
file(GLOB rnoh_textinput_maxlength_fixed_SRC CONFIGURE_DEPENDS *.cpp)
add_library(rnoh_textinput_maxlength_fixed SHARED ${rnoh_textinput_maxlength_fixed_SRC} ${rnoh_textinput_maxlength_fixed_SRC})
target_include_directories(rnoh_textinput_maxlength_fixed PUBLIC ${CMAKE_CURRENT_SOURCE_DIR} ${rnoh_textinput_maxlength_fixed_dir} ${CMAKE_CURRENT_SOURCE_DIR}/generated/RNOH/generated)
target_link_libraries(rnoh_textinput_maxlength_fixed PUBLIC rnoh)