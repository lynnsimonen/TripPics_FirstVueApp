//Component names should be TitleCase/PascalCase
//and should be multi-word, but singular in plurality.
//When used in HTML/templates, they become kabob-case.

app.component('TripList', {
    //Created and maintained by this component. This function is like a constructor.
    //Called separately for each instance of this component
    data: function () {
        return {}
    },
    //Data passed into component via attibutes. Optional.
    //Objects and arrays are pass-by-reference.
    //Primitieves (number, string, boolean) are pass-by-value.
    props: {
        trips: Array,   //HTML <photo-group-array="">

    },
    //Usually "events" triggered by v-on:
    methods: {
        deleteIt(trip) {
            this.$emit('remove-trip', trip);
        }
    },
    //values that are updated and cached if dependencies change. Need to rtn a value. Like values used in data or props.
    computed: {},
    //String "template" of HTML. ONLY one root HTML element.Can reference any data, props, mmethods... using {{ name }}
    template:
        `
          <q-list bordered class="rounded-borders">
          <q-expansion-item class="header-bar"
                            expand-icon-class="text-primary"
                            expand-separator
                            header-class="trips-hdr-class"
                            switch-toggle-side
          >
            <template v-slot:header>

              <q-item-section class="sort-hdr-title" side>
                <q-btn
                    class="q-btn-sort-hdr"
                    dense
                    flat
                    icon="import_export"
                    label="TRIP TITLE"
                    padding="0 0"
                    size="sm"
                >
                </q-btn>
              </q-item-section>
              <q-item-section class="sort-hdr-date">
                <q-btn
                    class="q-btn-sort-hdr"
                    align="right"
                    dense
                    flat
                    icon="import_export"
                    label="TRIP DATES"
                    padding="0 0"
                    size="sm"
                >
                </q-btn>
              </q-item-section>
              <q-item-section class="sort-hdr-trip-length">
                <q-btn
                    class="q-btn-sort-hdr"
                    align="right"
                    dense
                    flat
                    icon="import_export"
                    label="LENGTH OF TRIP"
                    padding="0 0"
                    size="sm"
                >
                </q-btn>
              </q-item-section>
            </template>
          </q-expansion-item>

          <!--  List out each trip from tripList in app.js-->
          <trip-list-trip
              v-for="trip in trips"
              :trip="trip"
              :key="trip.title"
              @remove-trip="deleteIt"
          ></trip-list-trip>

          </q-list>
          <div>Total trips: {{ trips.length }}</div>
        `,
});